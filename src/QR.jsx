function QR() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      margin: '0',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#fce4ec'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        maxWidth: '600px',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#e91e63',
          fontSize: '36px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Costuras Sabina Saraic
        </h1>

        <div style={{
          backgroundColor: '#e91e63',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '25px'
        }}>
          <h2 style={{ margin: '0', color: 'white', fontSize: '20px' }}>
            Escanea para ir al sitio
          </h2>
        </div>

        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          border: '4px solid #e91e63',
          display: 'inline-block',
          marginBottom: '25px'
        }}>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=1&color=000000&bgcolor=ffffff&data=https://9b62e298.costuras-sabina.pages.dev/qr.html"
            alt="Código QR - Costuras Sabina Saraic"
            style={{ 
              width: '300px', 
              height: '300px',
              display: 'block'
            }}
          />
        </div>

        <div style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#e8f5e9',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#2e7d32'
        }}>
          <strong>✅ QR Optimizado:</strong> Este QR está configurado para abrir automáticamente el navegador y llevar directamente al sitio.
        </div>

        <p style={{ marginTop: '20px', color: '#333', fontSize: '14px', fontWeight: 'bold' }}>
          🔍 Abre la cámara de tu celular y apunta al código QR
        </p>

        <p style={{ marginTop: '15px', color: '#666', fontSize: '13px' }}>
          Si no puedes escanear, también puedes tocar el enlace:
        </p>

        <a 
          href="https://ea9e3169.costuras-sabina.pages.dev/qr.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '12px 25px',
            backgroundColor: '#2196F3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Abrir sitio web
        </a>

        <p style={{ marginTop: '20px', color: '#999', fontSize: '11px' }}>
          O entra directamente en tu navegador:
        </p>

        <p style={{ marginTop: '5px', color: '#2196F3', fontSize: '11px', fontWeight: 'bold', wordBreak: 'break-all' }}>
          https://9b62e298.costuras-sabina.pages.dev/qr.html
        </p>

        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff3e0',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
          <strong>💡 Consejos para escanear:</strong>
          <ul style={{ marginTop: '10px', marginBottom: '0', paddingLeft: '20px', textAlign: 'left' }}>
            <li>Asegúrate de que la pantalla esté en modo claro</li>
            <li>Mantén el celular a unos 20-30 cm de distancia</li>
            <li>En iPhone: abre la app de cámara, apunta y espera 2-3 segundos</li>
            <li>En Android: usa la app de cámara o una app de QR dedicada</li>
            <li>Si no funciona, baja la imagen del QR y escanea desde tu galería</li>
          </ul>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          borderTop: '2px solid #e91e63'
        }}>
          <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
            ✂️ Costuras • Arreglos • Confecciones • Bordados ✂️
          </p>
          <p style={{ margin: '10px 0 0 0', color: '#999', fontSize: '12px' }}>
            Sabina Saraic - Tu belleza es mi arte
          </p>
        </div>
      </div>
    </div>
  )
}

export default QR
