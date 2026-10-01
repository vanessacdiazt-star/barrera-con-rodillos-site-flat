import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Barrera Metálica con Rodillos | Sistema de Contención Vehicular',
  description: 'Barrera Metálica con Rodillos. Rolling Barrier System. Información técnica, desempeño, aplicaciones y contacto para proyectos de seguridad vial.',
  metadataBase: new URL('https://barreraconrodillos.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
