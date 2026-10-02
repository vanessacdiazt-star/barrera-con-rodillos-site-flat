# Barrera Metálica con Rodillos — versión SEO-ready

Esta versión mantiene el diseño y la funcionalidad de la landing e incorpora la base técnica de indexación y descubrimiento:

- `app/sitemap.ts` → genera `https://barreraconrodillos.com/sitemap.xml`
- `app/robots.ts` → genera `https://barreraconrodillos.com/robots.txt`
- canonical a `https://barreraconrodillos.com`
- metadatos SEO y Open Graph
- metadatos para previews sociales
- datos estructurados JSON-LD (`WebSite`, `WebPage`, `Product`, `Service`, `Person`)
- permiso explícito de rastreo para Googlebot, Bingbot, OAI-SearchBot y ChatGPT-User
- favicon SVG del símbolo de la marca

## Después del deploy

1. Verificar que abran:
   - `https://barreraconrodillos.com/sitemap.xml`
   - `https://barreraconrodillos.com/robots.txt`
2. En Google Search Console, volver a enviar `sitemap.xml`.
3. En Inspección de URL, solicitar indexación de `https://barreraconrodillos.com/`.
4. En Bing Webmaster Tools, volver a enviar `https://barreraconrodillos.com/sitemap.xml`.
5. Validar los datos estructurados con la prueba de resultados enriquecidos de Google.

No se modificó el diseño visual de la página.
