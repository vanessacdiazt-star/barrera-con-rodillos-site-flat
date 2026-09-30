# barreraconrodillos.com — Landing v1

Implementación Next.js de los mockups aprobados.

## Reglas ancladas
- Header blanco.
- Navegación: Tecnología · Desempeño · Certificaciones · Aplicaciones · Criterios técnicos · Contacto.
- Logo: solo los dos elementos amarillos, sin palabra Roddy y sin relleno sólido.
- Azul institucional `#192C3D`.
- Amarillo institucional `#ECB537`.
- Denominación principal: **Barrera Metálica con Rodillos**.
- CTA superior: **Solicitar información**.
- Contacto: +34 675 123 282 / contacto@barreraconrodillos.com.
- Dominio previsto: barreraconrodillos.com.

## Assets
`public/assets/` contiene recortes derivados de los mockups aprobados para conservar el aspecto del sistema. `public/reference/` conserva imágenes de referencia de QA.

## Desarrollo local
```bash
npm install
npm run dev
```

## Producción
```bash
npm run build
npm start
```

Diseñado para desplegarse en Vercel y conectar el dominio mediante Cloudflare DNS.
