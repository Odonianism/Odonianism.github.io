# 奥多主义

An Astro-powered Chinese reading and ideas blog. Posts and pages remain in
`source/`; the Astro content collections load them directly from those Markdown
files. Source images are copied to `public/images/` for static serving.

## Run locally

```sh
npm install
npm run dev
```

Build the static site into `dist/` with:

```sh
npm run build
```

Posts live in `source/_posts/`. Pages and images live in `source/`.

## Portfolio projects

Add a Markdown file to `source/_projects/` for each portfolio project. Start
with `project-template.md`, fill in its frontmatter and project notes, and
remove `draft: true` when it is ready to publish. Projects can include a
category, summary, role, year, cover image, external URL, and tags. Optional
fields can be omitted. Published projects appear on `/portfolio/`, newest year
first.
