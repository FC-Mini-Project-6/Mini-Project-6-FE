import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
type Props = {};

const GnbMenu = () => {
  return (
    <div id='gnbMenu' className='w-full h-screen bg--black-100 z-[50]'>
      <div className='flex flex-col w-full mx-auto px-4'>
        <div className='flex flex-col space-y-2 text-gray-500'>
          <a className='hover:underline menu-item-root' href='/1'>
            메뉴 1
          </a>
          <a className='hover:underline menu-item-root' href='/2'>
            메뉴 2
          </a>
          <a className='hover:underline menu-item-root' href='/3'>
            메뉴 3
          </a>
        </div>
      </div>
    </div>
  );
};
const Header = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  function toggleMenu() {
    setisOpen((isOpen) => !isOpen);
  }
  return (
    <div className='flex relative m-auto top-8 h-12 w-96 '>
      <div className='absolute inset-x-0 top-0 text-center text-lg'>
        <span className='text-mw font-semibold'>MW </span>
        <span className='--black-100 font-light'>Bank</span>
      </div>
      <button className='absolute right-2 top-1' onClick={() => toggleMenu()}>
        <AiOutlineMenu size='28' />
      </button>
      {isOpen ? <GnbMenu /> : null}
    </div>
  );
};

export default Header;
