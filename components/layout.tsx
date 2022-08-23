import React from "react";
import Link from "next/link";
import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";
import Head from "next/head";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
  seoTitle?:string;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  seoTitle
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="bg-black h-screen flex">
    
    <div className="border-r border-gray-800 flex flex-col gap-2  xl:w-60">
      <svg
        className="text-white w-14 h-14 p-4 cursor-pointer ml-2 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        />
      </svg>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="hidden text-white xl:block pr-6">홈</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="hidden text-white xl:block pr-6">탐색하기</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="hidden text-white xl:block pr-6">알림</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        <span className="hidden text-white xl:block pr-6">쪽지</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
        <span className="hidden text-white xl:block pr-6">북마크</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        <span className="hidden text-white xl:block pr-6">리스트</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
        <svg className="text-white w-14 h-14 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="hidden text-white xl:block pr-6">프로필</span>
      </div>
      <div className="flex justify-start items-center  hover:bg-[#181819] rounded-full cursor-pointer ml-2 mr-2">
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
        {children}
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
}
