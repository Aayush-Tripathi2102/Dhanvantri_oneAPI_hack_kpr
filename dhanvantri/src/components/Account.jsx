import React from 'react';
import doctor from '../assets/doctorBG.jpg';
import patient from '../assets/patientBG.png';

const Account = () => {
  return (
    <div className='flex fixed justify-between h-[1000px] lg:mt-[6.7rem]'>
      <div
        style={{
          backgroundImage: `url(${doctor})`,
          backgroundSize: 'cover',
          height: '100%',
          backgroundPosition: 'center', // Center the image
        }}
        className='w-[1365px] relative' // Add relative positioning for absolute children
      >
        <div className='bg-black opacity-50 h-full hover:bg-black hover:opacity-70 transition duration-300'>
          <div className='absolute inset-0 flex pt-48 justify-center opacity-0 hover:opacity-100 transition duration-300'>
            <div className='text-white text-7xl font-calibri font-extrabold'>
              <div>Sign up as</div>
              <div>Doctor</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${patient})`,
          backgroundSize: 'cover',
          height: '100%',
          backgroundPosition: 'center', // Center the image
        }}
        className='w-full relative' // Add relative positioning for absolute children
      >
        <div className='bg-black opacity-50 h-full hover:bg-black hover:opacity-70 transition duration-300'>
          <div className='absolute inset-0 flex pt-48 justify-center opacity-0 hover:opacity-100 transition duration-300'>
            <div className='text-white text-7xl font-calibri font-extrabold'>
              <div>Sign up as</div>
              <div>Patient</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
