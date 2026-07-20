import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const outputDirectory = resolve("dist");

if (!existsSync(outputDirectory)) {
  throw new Error("dist/ does not exist. Run the production build first.");
}

function collectHtmlFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory()
      ? collectHtmlFiles(path)
      : extname(path) === ".html"
        ? [path]
        : [];
  });
}

function targetExists(href) {
  const pathname = href.split(/[?#]/)[0];
  if (!pathname || pathname === "/") return existsSync(join(outputDirectory, "index.html"));

  const cleanPath = pathname.replace(/^\//, "").replace(/\/$/, "");
  const direct = join(outputDirectory, cleanPath);
  return (
    existsSync(direct) ||
    existsSync(`${direct}.html`) ||
    existsSync(join(direct, "index.html"))
  );
}

const failures = [];

for (const file of collectHtmlFiles(outputDirectory)) {
  const html = readFileSync(file, "utf8");
  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    if (!targetExists(href)) failures.push(`${file}: ${href}`);
  }
}

if (failures.length) {
  throw new Error(`Broken internal links:\n${failures.join("\n")}`);
}

console.log("Internal links are valid.");
