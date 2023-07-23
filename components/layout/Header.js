import { Menu } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

function Header() {
  const iconStyle = useMemo(() => 'w-4 sm:w-5 md:w-6 lg:w-7', []);
  return (
    <div className='w-full bg-white bg-opacity-10 sticky'>
      <div className='flex items-center justify-between py-2 px-5 md:px-5 lg:px-10'>
        <Menu className={`text-white text-2xl md:text-3xl lg:text-4xl`} />
        <Image
          width={125}
          height={125}
          src='/induction.svg'
          alt='IIITD Logo'
          className='w-20 sm:w-24 md:w-28 lg:w-32'
        />
        <div className='flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10'>
          <Link href='/' className='text-white no-underline'>
            Home
          </Link>
          <Link href='/schedule' className='text-white no-underline'>
            Schedule
          </Link>
          <Image
            width={25}
            height={25}
            src='/icons/instagram.svg'
            alt='IIITD Logo'
            className={iconStyle}
          />
          <Image
            width={25}
            height={25}
            src='/icons/linkedin.svg'
            alt='IIITD Logo'
            className={iconStyle}
          />
          <Image
            width={25}
            height={25}
            src='/icons/twitter.svg'
            alt='IIITD Logo'
            className={iconStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
