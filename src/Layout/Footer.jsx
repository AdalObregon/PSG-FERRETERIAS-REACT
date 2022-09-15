import React from 'react';
import {
  RiSendPlane2Line,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubFill,
} from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='grid grid-cols-8 grid-rows-3  mb-0 bg-gray-800 h-54'>
      <div className='col-span-8 px-10'>
        <h2 className='text-white py-8 text-2xl font-bold'>Ferreteria</h2>
      </div>
      <div className='px-10 col-span-2'>
        <h2 className='text-white mb-2 text-xl font-semibold '>
          Suscribete a nuestro news letter
        </h2>
        <div className='flex content-center'>
          <input className='px-3 w-3/4 h-8' placeholder='correo@correo.com' />
          <buttom className='h-8 bg-yellow-300 py-2'>
            <RiSendPlane2Line className='w-10' />
          </buttom>
        </div>
      </div>
      <div className='px-12 col-span-2 text-white'>
        <h2 className='text-xl text-white  font-semibold mb-2'>Dirección</h2>
        <p>C. Darwin 335, Anzures</p>
        <p>Miguel Hidalgo, CDMX.</p>
      </div>
      <div className='px-12 col-span-2 text-white'>
        <h2 className='text-xl text-white  font-semibold mb-2'>Contacto</h2>
        <p>+52 55-3421-1234</p>
        <p>ferreteria@ferreteria.com</p>
      </div>
      <div className='px-12 col-span-2 text-white'>
        <h2 className='text-xl text-white  font-semibold mb-2'>Horario</h2>
        <p>Lunes - Sábado</p>
        <p>9AM - 18PM</p>
      </div>
      <div className=' px-12 border-2  border-t-white border-gray-800 col-start-2 col-end-7 mt-4 h-1'>
        <div className='flex justify-between mt-4 text-3xl text-white'>
          <div className='flex gap-4'>
            <RiInstagramLine />
            <RiLinkedinBoxLine />
            <RiGithubFill />
          </div>
          <div className=''>
            <p className='text-xl'>© Copyright 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
