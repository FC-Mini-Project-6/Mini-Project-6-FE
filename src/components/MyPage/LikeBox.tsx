import React from 'react';

const LikeBox = () => {
  return (
    <div className='w-[180px] h-[250px] bg-mw flex flex-col items-center justify-center rounded-default shadow-default'>
      <span className='text-white font-bold'>
        중소기업취업청년전월세보증금대출
      </span>
      <span className='text-white font-bold'>최대 1억 원</span>
      <div>
        <div className='flex items-center'>
          <span className='font-bold'>금리</span>{' '}
          <span className='text-[12px]'>1.2%</span>
        </div>
        <div className='flex items-center'>
          <span className='font-bold'>대상</span>{' '}
          <span className='text-[12px]'>근로자</span>
        </div>
        <div className='flex items-center'>
          <span className='font-bold'>취급 기관</span>{' '}
          <span className='text-[12px]'>근로 복지 공단</span>
        </div>
      </div>
      <button className='mwBtn !w-[100px] !h-[30px] !text-[12px]'>
        자세히 보기
      </button>
    </div>
  );
};

export default LikeBox;
