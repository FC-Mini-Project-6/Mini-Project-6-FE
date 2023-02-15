import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setisOpen((isOpen) => !isOpen);
  };
  if (!isOpen) {
    return (
      <div className='flex relative m-auto h-[100px] w-96 items-center justify-center'>
        <div
          className='inset-x-0 top-0 text-cente cursor-pointer'
          onClick={() => navigate('/')}
        >
          <span className='text-mw font-semibold'>MW </span>
          <span className='--black-100 font-light'>Loan</span>
        </div>
        <button
          className='absolute right-2 top-[50%] translate-y-[-50%]'
          onClick={() => toggleMenu()}
        >
          <AiOutlineMenu size='28' />
        </button>
      </div>
    );
  } else {
    return (
      <div id='gnbMenu' className='w-full h-screen bg-[#000] z-[50]'>
        <div id='menuHeader' className='w-full h-[210px] bg-mw'>
          <div
            className='float-right mt-9 mr-[50px]'
            onClick={() => toggleMenu()}
          >
            {' '}
            <AiOutlineClose size='32' color='#fff' />
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
