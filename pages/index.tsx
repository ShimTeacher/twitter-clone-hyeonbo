import React from "react";

export default () => (
  <div className="bg-black h-screen flex">
    <div className="border-r border-gray-800 flex flex-col gap-2  xl:w-60 ">
      <svg
        className="text-white w-14 h-14 p-4 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        />
      </svg>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="hidden text-white xl:block pr-6">홈</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="hidden text-white xl:block pr-6">탐색하기</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="hidden text-white xl:block pr-6">알림</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        <span className="hidden text-white xl:block pr-6">쪽지</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
        <span className="hidden text-white xl:block pr-6">북마크</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        <span className="hidden text-white xl:block pr-6">리스트</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="hidden text-white xl:block pr-6">프로필</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="hidden text-white xl:block pr-6">더보기</span>
      </div>
      <div className="flex justify-center items-center  rounded-full cursor-pointer ">
        <svg className="text-white w-14 h-14 p-4  hover:bg-[#277cbd] rounded-full cursor-pointer bg-[#2D8CD7] xl:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 8.8 7.2 H 5.6 V 3.9 c 0 -0.4 -0.3 -0.8 -0.8 -0.8 s -0.7 0.4 -0.7 0.8 v 3.3 H 0.8 c -0.4 0 -0.8 0.3 -0.8 0.8 s 0.3 0.8 0.8 0.8 h 3.3 v 3.3 c 0 0.4 0.3 0.8 0.8 0.8 s 0.8 -0.3 0.8 -0.8 V 8.7 H 9 c 0.4 0 0.8 -0.3 0.8 -0.8 s -0.5 -0.7 -1 -0.7 Z m 15 -4.9 v -0.1 h -0.1 c -0.1 0 -9.2 1.2 -14.4 11.7 c -3.8 7.6 -3.6 9.9 -3.3 9.9 c 0.3 0.1 3.4 -6.5 6.7 -9.2 c 5.2 -1.1 6.6 -3.6 6.6 -3.6 s -1.5 0.2 -2.1 0.2 c -0.8 0 -1.4 -0.2 -1.7 -0.3 c 1.3 -1.2 2.4 -1.5 3.5 -1.7 c 0.9 -0.2 1.8 -0.4 3 -1.2 c 2.2 -1.6 1.9 -5.5 1.8 -5.7 Z" /></svg>
        <span className="hidden xl:block text-center justify-center text-white p-4 bg-[#2D8CD7] rounded-full w-full font-bold text-xl m-2 hover:bg-[#277cbd]">트윗하기</span>
      </div>
      <div className="flex flex-1 justify-center items-end">
        <svg className="text-white w-14 h-14 p-4 hover:bg-[#181819] rounded-full cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
    </div>

    <div className="flex-1 bg-black w-full flex flex-row gap-2 ">
      <div className="flex-1 h-screen border-r border-gray-800 ">
        <div className="p-4 bg-black border-b  border-gray-800">
          <div className="flex justify-between">
            <span className="text-white text-2xl">홈</span>
            <svg className="w-6 h-6 text-white text-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
          </div>
          <div className="flex mt-5">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

            <div className="flex-1 bg-black">
              <div className="ml-2 p-1 flex justify-center items-center w-24 rounded-full border-gray-800 border-2 cursor-pointer">
                <span className=" max-w-fit text-[#2D8CD7] text-xs font-bold">모든 사람 </span>
                <svg className="w-4 h-4 text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              
              <form > <input type="text" className="appearance-none w-full px-3 py-5 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none text-xl" placeholder="무슨 일이 일어나고 있나요?" /></form>
              <div className="flex justify-between items-center border-t-2 border-gray-800">
                <div className="flex items-center p-5 gap-3">
                  <svg className="w-6 h-6 text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <svg className="w-6 h-6 text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <svg className="w-6 h-6 text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                  <svg className="w-6 h-6 text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>  
                </div>
                
                <button className="flex-end right-5 pl-8 pr-8 pt-2 pb-2 rounded-full text-white bg-[#2D8CD7]">트윗하기</button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-black border-b  border-gray-800">
          <div className="flex mt-5">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            
            <div className="flex-1 ml-3">
              <div className="flex flex-row gap-4 items-center">
                <span className="text-white">Hyeonbo.dev</span>
                <span className="text-white">@teachershim</span>
                <span className="text-white">8월 22일</span>
              </div>

              <div className="flex flex-row gap-4 mb-5">
                <p className="mt-3 text-white">
                  Tuesday at 8 pm UTC, we'll be live on Twitter Spaces with 
@OpenOceanGlobal
, a multichain DEX aggregator on 
@optimismFND
.

We'll chat about their most recent SNX integration, the benefits of SNX Atomic Swaps for traders, and much more.

See you there! 👇
                </p>
              </div>
              
              <div className="grid grid-cols-4 pb-2 ">
                <div className="group flex gap-2 items-center cursor-pointer">
                  <div className="flex justify-start items-center group-hover:bg-[#181819] rounded-full p-1">
                    <svg className="text-gray-600 w-6 h-6 group-hover:text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  </div>
                  
                  <span className="text-gray-600 text-sm group-hover:text-[#2D8CD7]">10</span>
                </div>

                <div className="group flex gap-2 items-center cursor-pointer">
                  <div className=" flex justify-start items-center  group-hover:bg-[#181819] rounded-full p-1">
                    <svg className="text-gray-600 w-6 h-6 group-hover:text-[#24BA7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  </div>
                  <span className="text-gray-600 text-sm group-hover:text-[#24BA7B]">10</span>
                </div>

                <div className="group flex gap-2 items-center cursor-pointer">
                  <div className="flex justify-start items-center  group-hover:bg-[#181819] rounded-full p-1">
                    <svg className="text-gray-600 w-6 h-6 group-hover:text-[#C91267]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  </div>
                  <span className="text-gray-600 text-sm group-hover:text-[#C91267]">10</span>
                </div>

                <div className="group flex gap-2 items-center cursor-pointer">
                  <div className=" flex justify-start items-center  group-hover:bg-[#181819] rounded-full p-1">
                    <svg className="text-gray-600 w-6 h-6 group-hover:text-[#2D8CD7]"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
      












      <div className="hidden bg-[#17181C] lg:block w-96 p-5 rounded-xl m-3">
        <div className="mb-10">
          <span className="text-white text-2xl font-bold">나를 위한 트랜드</span>  
        </div>

        <div className="flex flex-col justify-center w-full mb-10">
          <span className="text-gray-500 font-normal text-sm">대한민국에서 트렌드 중</span>
          <span className="text-white font-bold">참치 초고추장</span>
          <span className="text-gray-500 font-normal text-sm">9,142 트윗</span>
          <svg className="fixed right-10 w-6 h-6 text-gray-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>

        <div className="flex flex-col justify-center w-full mb-2">
          <span className="text-gray-500 font-normal text-sm">대한민국에서 트렌드 중</span>
          <span className="text-white font-bold">참치 초고추장</span>
          <span className="text-gray-500 font-normal text-sm">9,142 트윗</span>
          <svg className="fixed right-10 w-6 h-6 text-gray-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>

        <div className="flex flex-col justify-center w-full mb-2">
          <span className="text-gray-500 font-normal text-sm">대한민국에서 트렌드 중</span>
          <span className="text-white font-bold">참치 초고추장</span>
          <span className="text-gray-500 font-normal text-sm">9,142 트윗</span>
          <svg className="fixed right-10 w-6 h-6 text-gray-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>
        
        <div className="flex flex-col justify-center w-full mb-2">
          <span className="text-gray-500 font-normal text-sm">대한민국에서 트렌드 중</span>
          <span className="text-white font-bold">참치 초고추장</span>
          <span className="text-gray-500 font-normal text-sm">9,142 트윗</span>
          <svg className="fixed right-10 w-6 h-6 text-gray-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>        
      </div>
    </div>
  </div>
);
