import { useState } from 'react'
import TarjetaCosturera from './Tarjeta'
import QRSimple from './QRSimple'

function App(){
  const [mostrarQR, setMostrarQR] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 m-0 w-full box-border">
      <div className="bg-[#fce4ec] p-8 rounded-3xl max-w-2xl w-full box-border text-center">
        <TarjetaCosturera />

        {mostrarQR && <QRSimple />}

        <button 
          onClick={() => setMostrarQR(!mostrarQR)}
          className="mt-8 px-8 text-[14px] bg-[#e91e63] text-white border-none rounded-lg cursor-pointer shadow-md transition-all duration-300 opacity-70"
        >
          {mostrarQR ? 'Ocultar QR' : 'Mostrar QR'}
        </button>
      </div>
    </div>
  )
}

export default App
