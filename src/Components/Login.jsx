import React from 'react';

const Login = () => {
  return (
    <>
      <section className='grid grid-cols-2 h-screen bg-gray-200'>
        <div className='bg-[url("./assets/login_img.jpg")] bg-no-repeat bg-cover'></div>
        <div className='bg-gray-50'>
          <form className='flex h-screen'>
            <div className='m-auto w-7/12'>
              <h1 className='font-bold text-5xl text-center mb-20 text-zinc-700'>
                Iniciar Sesion
              </h1>
              <div className=' mt-6'>
                <label className='block text-2xl mb-3 font-medium'>Correo</label>
                <input
                  placeholder='example@example.com'
                  className='w-full h-12 px-3 rounded-lg bg-gray-50 border-2 border-gray-300'
                />
              </div>
              <div className=' mt-6'>
                <label className='block text-2xl mb-3 font-medium'>Contraseña</label>
                <input
                  placeholder='**********'
                  className='w-full h-12 px-3 rounded-lg bg-gray-50 border-2 border-gray-300'
                />

                <p className='grid justify-items-end mt-4 font-semibold hover:text-gray-600'>
                  <a href='#'> ¿ Olvidaste tu contraseña ? </a>
                </p>
              </div>
              <div className=' mt-6'>
                <button className='bg-green-300 hover:bg-green-400 w-full h-14 rounded-lg text-2xl font-semibold mb-10'>
                  Iniciar Sesión
                </button>
                <p className='text-center'>
                  ¿No tienes cuenta?
                  <span className='font-semibold text-lime-700 hover:text-lime-600'>
                    <a href='#'> Registrate</a>
                  </span>{' '}
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
