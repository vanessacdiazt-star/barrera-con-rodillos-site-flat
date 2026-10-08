export default function ColombiaPage() {
  return (
    <main
      style={{
        background: '#F5F2EA',
        color: '#A97712',
      }}
    >
      <section
        style={{
          minHeight: '92vh',
          padding: '48px 28px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1380px',
            margin: '0 auto',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#192C3D',
            }}
          >
            Colombia · Sistemas de contención vehicular
          </p>

          {/* Main headline */}
          <div
            style={{
              marginTop: '90px',
              maxWidth: '1180px',
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(52px, 8vw, 116px)',
                lineHeight: 0.94,
                letterSpacing: '-0.055em',
                fontWeight: 500,
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
                  color: '#53616C',
                }}
              >
                en Colombia.
              </span>
            </h1>
          </div>

          {/* Supporting content */}
          <div
            style={{
              marginTop: '56px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px',
              alignItems: 'end',
            }}
          >
            <div
              style={{
                maxWidth: '660px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  lineHeight: 1.5,
                  color: '#334755',
                }}
              >
                Tecnología de contención vehicular con especificación
                técnica aplicable en Colombia, respaldada por
                certificaciones internacionales.
              </p>

              <p
                style={{
                  marginTop: '24px',
                  marginBottom: 0,
                  maxWidth: '610px',
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#63717B',
                }}
              >
                Global Fund Group S.A.S. cuenta con la distribución
                exclusiva en Colombia, con respaldo y soporte técnico
                de los fabricantes para instalación y mantenimiento.
              </p>
            </div>

            {/* Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                justifyContent: 'flex-start',
              }}
            >
              <a
                href="#contacto-colombia"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '52px',
                  padding: '0 24px',
                  background: '#192C3D',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
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
                  minHeight: '52px',
                  background: '#192C3D',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                Consultar Artículo 732-22 INVÍAS ↗
              </a>
            </div>
          </div>
        </div>

        {/* Technical credentials */}
        <div
          style={{
            width: '100%',
            maxWidth: '1380px',
            margin: '70px auto 0',
            borderTop: '1px solid rgba(25,44,61,0.18)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          <div
            style={{
              padding: '24px 0',
              paddingRight: '32px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '11px',
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
                margin: '8px 0 0',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              INVÍAS · Artículo 732-22
            </p>
          </div>

          <div
            style={{
              padding: '24px 0',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '11px',
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
                margin: '8px 0 0',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              EN 1317 · MASH · CE · FHWA
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
