export default function ColombiaPage() {
  return (
    <main
      style={{
        background: '#F5F2EA',
        color: '#192C3D',
      }}
    >
      <section
        style={{
          minHeight: '92vh',
          padding: '32px 24px 28px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '58px',
            }}
          >
            {/* Motivo Roddy */}
            <div
              aria-hidden="true"
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  width: '9px',
                  height: '24px',
                  border: '2px solid #ECB537',
                  borderRadius: '999px',
                  display: 'block',
                  transform: 'rotate(18deg)',
                }}
              />
              <span
                style={{
                  width: '9px',
                  height: '24px',
                  border: '2px solid #ECB537',
                  borderRadius: '999px',
                  display: 'block',
                  transform: 'rotate(18deg)',
                }}
              />
            </div>

            <p
              style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#192C3D',
              }}
            >
              Colombia · Sistemas de contención vehicular
            </p>
          </div>

          {/* Hero grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left */}
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(58px, 7.4vw, 108px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.055em',
                  fontWeight: 500,
                  color: '#192C3D',
                }}
              >
                Barrera Metálica
                <br />
                con Rodillos
                <br />
                <span
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#66727C',
                  }}
                >
                  en Colombia.
                </span>
              </h1>

              <p
                style={{
                  maxWidth: '660px',
                  marginTop: '40px',
                  marginBottom: 0,
                  fontSize: 'clamp(19px, 1.7vw, 24px)',
                  lineHeight: 1.45,
                  color: '#334755',
                }}
              >
                Tecnología de contención vehicular con especificación
                técnica aplicable en Colombia y respaldo en
                certificaciones internacionales.
              </p>

              <p
                style={{
                  maxWidth: '650px',
                  marginTop: '22px',
                  marginBottom: 0,
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#66727C',
                }}
              >
                Global Fund Group S.A.S. cuenta con la distribución
                exclusiva en Colombia, con respaldo y soporte técnico de
                los fabricantes para instalación y mantenimiento.
              </p>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '22px',
                  alignItems: 'center',
                  marginTop: '34px',
                }}
              >
                <a
                  href="#contacto-colombia"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '54px',
                    padding: '0 25px',
                    background: '#ECB537',
                    color: '#192C3D',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 700,
                    borderRadius: '3px',
                  }}
                >
                  Solicitar información técnica
                </a>

                <a
                  href="/art_0732_inv_2022.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '54px',
                    color: '#192C3D',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    borderBottom: '1px solid rgba(25,44,61,0.35)',
                  }}
                >
                  Consultar Artículo 732-22 INVÍAS ↗
                </a>
              </div>
            </div>

            {/* Right image */}
            <div
              style={{
                position: 'relative',
                minHeight: '610px',
              }}
            >
              <img
                src="/assets/hero-road.jpg"
                alt="Barrera Metálica con Rodillos instalada en infraestructura vial"
                style={{
                  width: '100%',
                  height: '610px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '2px',
                }}
              />

              {/* Small brand marker */}
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  bottom: '24px',
                  background: '#F5F2EA',
                  padding: '14px 18px',
                  maxWidth: '250px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#A97712',
                  }}
                >
                  Colombia
                </p>

                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: '14px',
                    lineHeight: 1.45,
                    color: '#192C3D',
                  }}
                >
                  Distribución con respaldo técnico del fabricante
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div
            style={{
              marginTop: '64px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(25,44,61,0.18)',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#A97712',
                }}
              >
                Especificación técnica en Colombia
              </p>

              <p
                style={{
                  margin: '7px 0 0',
                  fontSize: '17px',
                  color: '#192C3D',
                }}
              >
                INVÍAS · Artículo 732-22
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#A97712',
                }}
              >
                Certificaciones internacionales
              </p>

              <p
                style={{
                  margin: '7px 0 0',
                  fontSize: '17px',
                  color: '#192C3D',
                }}
              >
                EN 1317 · MASH · CE · FHWA
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
