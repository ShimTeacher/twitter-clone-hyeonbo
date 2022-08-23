import React from "react";
import Layout from "@components/layout";
export default () => (
  <Layout title="홈" hasTabBar>
    <div className="flex-1 h-screen border-r border-gray-800 ">
      <div className="p-4 bg-black border-b  border-gray-800">
        <div className="flex mt-5">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          
          <div className="flex-1 ml-3">
            <div className="flex flex-col">
              <span className="text-white">Hyeonbo.dev</span>
              <span className="text-white">@teachershim</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-4 mb-3">
          <p className="mt-3 text-white text-xl">
            Tuesday at 8 pm UTC, we'll be live on Twitter Spaces with 
            @OpenOceanGlobal
            , a multichain DEX aggregator on 
            @optimismFND
            .

            We'll chat about their most recent SNX integration, the benefits of SNX Atomic Swaps for traders, and much more.

            See you there! 👇
          </p>

          <div className="flex gap-3 border-b border-gray-700 pb-4">
            <span className="text-gray-500">오후 7:17 · 2022년 8월 23일</span>
            <span className="text-gray-500"> · Twitter Web App</span>
          </div>
          <div className="flex gap-3 border-b border-gray-700 pb-4">
            <div className="flex justify-center items-center">
              <span className="text-white font-bold mr-1">299</span>
              <span className="text-gray-500 text-sm">리트윗</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-white font-bold mr-1">299</span>
              <span className="text-gray-500 text-sm">인용한 트윗</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-white font-bold mr-1">299</span>
              <span className="text-gray-500 text-sm">마음에 들어요</span>
            </div>
          </div>
        </div>
            
        <div className="grid grid-cols-4">
          <div className="group flex gap-2 items-center justify-center cursor-pointer">
            <div className="flex justify-start items-center group-hover:bg-[#181819] rounded-full p-1">
              <svg className="text-gray-600 w-6 h-6 group-hover:text-[#2D8CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </div>
          </div>

          <div className="group flex gap-2 items-center justify-center cursor-pointer">
            <div className=" flex justify-start items-center  group-hover:bg-[#181819] rounded-full p-1">
              <svg className="text-gray-600 w-6 h-6 group-hover:text-[#24BA7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
          </div>

          <div className="group flex gap-2 items-center justify-center cursor-pointer">
            <div className="flex justify-start items-center  group-hover:bg-[#181819] rounded-full p-1">
              <svg className="text-gray-600 w-6 h-6 group-hover:text-[#C91267]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
          </div>

          <div className="group flex gap-2 items-center justify-center cursor-pointer">
            <div className=" flex justify-start items-center  group-hover:bg-[#181819] rounded-full p-1">
              <svg className="text-gray-600 w-6 h-6 group-hover:text-[#2D8CD7]"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </div>
          </div>                
        </div>
      </div>
    </div>
  </Layout>
        
);
