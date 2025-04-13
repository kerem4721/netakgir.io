// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/905425969558', '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">İletişim</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Bize Ulaşın</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">İsim</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2">E-posta</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Mesajınız</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition duration-300"
            >
              Gönder
            </button>
          </form>
          <div className="mt-6">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>WhatsApp ile İletişime Geç</span>
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Konum</h3>
          <div className="w-full h-64 bg-gray-200 rounded-md">
            {/* Replace with actual Google Maps embed */}
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_CODE"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Adres: [AKGÜR MARKET Adresi]
              <br />
              Tel: +90 542 596 95 58
              <br />
              E-posta: kerem47980@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;