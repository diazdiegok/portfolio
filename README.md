# Diego Nicolás Diaz — Portfolio

Sitio profesional de presentación: quién soy, de dónde vengo, qué hago y una selección de proyectos propios.

- **LinkedIn:** [diego-nicolás-diaz](https://www.linkedin.com/in/diego-nicol%C3%A1s-diaz-966153227/)
- **GitHub:** [diazdiegok](https://github.com/diazdiegok)

## Por qué Vercel (y no GitHub Pages)

Este portfolio está pensado para **Vercel**:

- HTTPS y dominio propio sin pelear con `basePath`
- Deploys automáticos en cada push a `main`
- Preview por pull request
- Next.js nativo (App Router, fuentes, metadata)

GitHub Pages sirve para los proyectos estáticos del listado. El portfolio, en cambio, conviene tenerlo en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Publicar en Vercel

1. Creá un repositorio en GitHub (por ejemplo `diazdiegok/portfolio`) y subí este proyecto.
2. Entrá a [vercel.com](https://vercel.com) → **Add New** → **Project** → importá el repo.
3. Framework: **Next.js**. Build: `next build`. Output: automático.
4. Deploy. La URL queda tipo `https://diego-diaz-portfolio.vercel.app`.
5. (Opcional) Dominio propio: Settings → Domains.

Si preferís CLI:

```bash
npx vercel
```
