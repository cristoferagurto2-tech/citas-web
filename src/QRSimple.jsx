function QRSimple() {
  return (
    <div className="mt-10 bg-[#e91e63] p-4 rounded-xl">
      <h3 className="m-0 mb-3 text-white text-[18px] text-center font-serif">
        Escanea el QR para ver la tarjeta en tu celular
      </h3>
      
      <div className="bg-white p-5 rounded-xl border-4 border-[#e91e63] inline-block mb-4">
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=1&color=000000&bgcolor=ffffff&data=https://9b62e298.costuras-sabina.pages.dev/"
          alt="Código QR - Costuras Sabina Saraic"
          className="w-[300px] h-[300px] block"
        />
      </div>
    </div>
  )
}

export default QRSimple
