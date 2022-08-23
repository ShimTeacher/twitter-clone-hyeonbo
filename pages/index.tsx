import React from "react";
import Layout from "@components/layout";

export default () => (
  <Layout title="홈" hasTabBar>
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
  </Layout>
);
