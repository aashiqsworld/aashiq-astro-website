# Aashiq's Personal Website

#### Built with Astro and Tailwind CSS

## 🚀 Project Structure

```
/
├── public/
├── src/
│   └── pages/ [main website pages]
│   	└── posts/ [markdown files]
│   └── layouts/ [layout templates]
│   └── components/ [reusable components]
│   └── assets/ [images, hosted files, etc.]
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
