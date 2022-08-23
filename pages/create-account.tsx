import React from "react";

export default () => (
  <div className="bg-black h-screen flex flex-col justify-between items-center">
    <svg
      className="mt-5 w-12 h-12 text-blue-300 fill-current top-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path
        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
      />
    </svg>
    
    <div className="flex-1 flex flex-col items-start gap-5 pt-5 w-full pl-10 pr-10">
      <h1 className="font-bold text-3xl mt-5 text-white pb-3">계정을 생성하세요</h1>

      <form className="flex flex-1 flex-col w-full gap-5">
        <input required type="text" className="appearance-none w-full px-3 py-5 border-2 border-gray-600 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none  focus:border-[#339aef] " placeholder="이메일"/>
        <input type="text" className="appearance-none w-full px-3 py-5 border-2 border-gray-600 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none  focus:border-[#339aef] " placeholder="이름"/>
        <input type="text" className="appearance-none w-full px-3 py-5 border-2 border-gray-600 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none  focus:border-[#339aef] " placeholder="휴대폰"/>

        <span className="text-white text-bold mt-6">생년월일</span>
        <p className="text-gray-500">이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관없이 나이의 연령을 확인하세요.</p>

        <div className="flex flex-row h-16 gap-4">
          <select name="" id="" className="p-2 text-white bg-black w-full focus:outline-none  focus:border-[#339aef] border-2 border-gray-600">
            <option value="1">1월</option>
            <option value="1">2월</option>
            <option value="1">3월</option>
            <option value="1">4월</option>
            <option value="1">5월</option>
            <option value="1">6월</option>
            <option value="1">7월</option>
            <option value="1">8월</option>
            <option value="1">9월</option>
            <option value="1">10월</option>
            <option value="1">11월</option>
            <option value="1">12월</option>
          </select>

          <select name="" id="" className="p-2 text-white bg-black w-full focus:outline-none  focus:border-[#339aef] border-2 border-gray-600">
            {[...Array(31).keys()].map(item => {
              return <option value={item+1}>{item+1} 일</option>
            }) }
          </select>

          <select name="" id="" className="p-2 text-white bg-black w-full focus:outline-none  focus:border-[#339aef] border-2 border-gray-600">
            {[...Array(31).keys()].map(item => {
              return <option value={item+1}>{item+1} 년</option>
            }) }
          </select>
        </div>
        

        
      </form>


      
      
      <div className="w-full flex text-center mb-1">
        <span className="text-black bg-gray-500 p-5 w-full rounded-full font-bold text-xl mb-5">다음</span>
      </div>


      
{/*       
      <button className="cursor-not-allowed font-medium text-md p-14 pt-2 pb-2 bg-white rounded-full text-black flex items-center justify-center">
        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Google 계정으로 계속하기
      </button>
      <button className="cursor-not-allowed font-bold text-md p-14 pt-2 pb-2 w-full bg-white rounded-full text-black  flex items-center justify-center">
        <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
        Apple로 계속하기
      </button>

      <div className="flex flex-row justify-center items-center w-full">
        <div className="border-t-2 flex-1"/>
        <span className="pl-2 pr-2 text-white">또는</span>
        <div className="border-t-2 flex-1"/>
      </div> */}

      

      {/* <button className="font-semibold text-sm p-14 pt-2 pb-2 bg-white rounded-full text-black w-full">다음</button> */}
      {/* <button className="font-bold text-md p-14 pt-1 pb-1 bg-black border-2 rounded-full text-white w-full ">비밀번호를 잊으셨나요?</button> */}
    </div>
    <div></div>
  </div>
);
