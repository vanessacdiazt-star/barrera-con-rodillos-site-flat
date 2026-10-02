import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://barreraconrodillos.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Barrera Metálica con Rodillos en Colombia | Sistema de Contención Vehicular',
    template: '%s | Barrera Metálica con Rodillos',
  },
  description:
    'Información técnica de la Barrera Metálica con Rodillos para proyectos de seguridad vial en Colombia y Latinoamérica: funcionamiento, desempeño, aplicaciones, certificaciones y contacto técnico-comercial.',
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Vanessa Díaz Torres', url: siteUrl }],
  creator: 'Barrera Metálica con Rodillos',
  publisher: 'Barrera Metálica con Rodillos',
  category: 'Seguridad vial e infraestructura',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Barrera Metálica con Rodillos',
    title: 'Barrera Metálica con Rodillos en Colombia | Sistema de Contención Vehicular',
    description:
      'Tecnología de contención vehicular con rodillos: funcionamiento, desempeño, aplicaciones, certificaciones y atención técnica y comercial para proyectos en Colombia y Latinoamérica.',
    images: [
      {
        url: '/assets/hero-road.jpg',
        width: 1800,
        height: 1013,
        alt: 'Barrera Metálica con Rodillos instalada en una curva vial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrera Metálica con Rodillos en Colombia',
    description:
      'Sistema de contención vehicular con rodillos para proyectos de seguridad vial en Colombia y Latinoamérica.',
    images: ['/assets/hero-road.jpg'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Barrera Metálica con Rodillos',
      alternateName: 'Rolling Barrier System',
      inLanguage: 'es',
      description:
        'Información técnica y comercial sobre la Barrera Metálica con Rodillos para proyectos de seguridad vial en Colombia y Latinoamérica.',
      about: { '@id': `${siteUrl}/#product` },
      publisher: { '@id': `${siteUrl}/#vanessa-diaz-torres` },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Barrera Metálica con Rodillos en Colombia | Sistema de Contención Vehicular',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#product` },
      mainEntity: [
        { '@id': `${siteUrl}/#product` },
        { '@id': `${siteUrl}/#service` },
      ],
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/hero-road.jpg`,
      },
      inLanguage: 'es',
      description:
        'Funcionamiento, desempeño, aplicaciones, certificaciones y contacto técnico-comercial de la Barrera Metálica con Rodillos.',
    },
    {
      '@type': 'Product',
      '@id': `${siteUrl}/#product`,
      name: 'Barrera Metálica con Rodillos',
      alternateName: 'Rolling Barrier System',
      url: siteUrl,
      image: `${siteUrl}/assets/hero-road.jpg`,
      category: 'Sistema de contención vehicular',
      description:
        'Sistema de contención vehicular con rodillos orientado a transformar, absorber y disipar energía de impacto y ayudar a redirigir el vehículo de forma controlada.',
      audience: {
        '@type': 'Audience',
        audienceType: 'Entidades viales, concesionarios, contratistas, diseñadores y responsables de infraestructura vial',
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Atención técnica y comercial de Barrera Metálica con Rodillos',
      serviceType: 'Consultas técnicas y comerciales para proyectos de sistemas de contención vehicular',
      url: `${siteUrl}/#contacto`,
      provider: { '@id': `${siteUrl}/#vanessa-diaz-torres` },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Place', name: 'Latinoamérica' },
      ],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#vanessa-diaz-torres`,
      name: 'Vanessa Díaz Torres',
      jobTitle: 'Consultas técnicas y comerciales',
      url: `${siteUrl}/#contacto`,
      email: 'mailto:contacto@barreraconrodillos.com',
      telephone: '+34 675 123 282',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Valencia',
        addressCountry: 'ES',
      },
      knowsAbout: [
        'Barrera Metálica con Rodillos',
        'Sistemas de contención vehicular',
        'Seguridad vial',
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
