# Mauricio Garcia Villanueva Portfolio

Static portfolio site for [emgar.tech](https://emgar.tech). The site presents Mauricio's AI/ML, data, and software engineering work with project case studies, source links, and public contact links.

## Stack

- Vite
- React
- TypeScript
- GitHub Pages

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

Push to `main`. GitHub Actions builds `dist` and deploys it to GitHub Pages. The custom domain is configured through `public/CNAME`.

The previous Spring Boot version is preserved on the `checkpoint/legacy-spring-site` branch.
