import React from 'react'
import Contour from '../ui/Contour'
import Margin from '../Margin'

function TopMenu() {
  return (
    <div>  
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col   text-center'>

      {/* 상단 여백 적용 */}


      {/* 프로필 정보 */}
        <div className='flex self-start mx-3 my-4'>
          <div className='flex items-center'>
            <div className='relative overflow-hidden rounded-full bg-black h-12 w-12'>
              <img
                src='프로필사진의_이미지_경로.jpg'
                alt='프로필 사진'
                className='h-16 w-16 rounded-full'/>
            </div>
            <Margin left="3"></Margin>
            {/* 사진과 높이가 맞도록 */}
            <div className='flex items-center px-4'>
              유저 A
            </div>
          </div>
        </div>
<Contour></Contour>
<div className='m-3 flex justify-around'>
      {/* 게시물 */}
      <div className='rounded border border-gray-400 bg-gray-200
      hover:bg-gray-300 text-gray-700 hover:text-gray-800
        justify-center align-middle min-w-max p-2'>
        내 게시물
      </div>

      {/* 댓글 버튼  */}
      <div className='rounded border border-gray-400 bg-gray-200
      hover:bg-gray-300 text-gray-700 hover:text-gray-800
      justify-center align-middle min-w-max p-2'>
        내 댓글
      </div>
    </div>
    </div>
  </div></div>
  )
}

export default TopMenu