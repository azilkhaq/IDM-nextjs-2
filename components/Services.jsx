import React from 'react';

const Service = () => {
  return (
    <div id='service' className='max-w-[1240px] m-auto grid grid-cols-2 justify-center gap-8 p-8 mt-10'>
      {/* Judul */}
      <div className="col-span-2 text-right">
        <h1 className="text-white text-3xl font-semibold mb-5">S E R V I C E S</h1>
        <hr className="border-t-1 border-sky-600 w-full mx-auto" />
      </div>

      {/* Kolom Kiri (Teks) */}
      <div className="col-span-1 mt-20">
        <h2 className="text-white text-2xl font-semibold">Consultancy</h2>
        <p className="text-white py-5">
          As our tagline to be closest with our clients, we are proposing a new different way of IT Consultancy. Not only putting the mainstream jargon, but also giving more value to our clients. Hence, our clients have value in more areas.
        </p>
        <h2 className="text-white text-2xl font-semibold mt-5">System Design, Devops</h2>
        <p className="text-white py-5">
          As our tagline to be closest with our clients, we are proposing a new different way of IT Consultancy. Not only putting the mainstream jargon, but also giving more value to our clients. Hence, our clients have value in more areas.
        </p>
      </div>

      {/* Kolom Kanan (Gambar) */}
      <div className="col-span-1 flex justify-center items-center">
        <img src="/img-service.png" alt="Gambar" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Service;
