import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";

interface SignForm {
  email?: string;
  name?: string;
  phone?: string;
}

interface MutationResult {
  ok: boolean;
  error: string;
}


export default () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const [enter, { loading, data }] = useMutation<MutationResult>(
    "/api/users/sign"
  );

  const onValid = (validForm: SignForm) => {
    if (loading) return;
    enter(validForm);
  };

  useEffect(() => {
    if (!loading && data?.ok) {
      router.push("/log-in");
    }
  }, [data]);

  

  return (
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
      <form onSubmit={handleSubmit(onValid)} className="flex flex-1 flex-col w-full gap-5">
          <input
            required
            {...register("email")}
            name="email"
            type="email"
            className="appearance-none w-full px-3 py-5 border-2 border-gray-600 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none  focus:border-[#339aef] "
            placeholder="이메일"
            
          />
          <input
            {...register("name")}
            name="name"
            type="text"
            className="appearance-none w-full px-3 py-5 border-2 border-gray-600 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none  focus:border-[#339aef]"
            placeholder="이름"
          />
          <input
            {...register("phone")}
            name="phone"
            type="text"
            className="appearance-none w-full px-3 py-5 border-2 border-gray-600 bg-black rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none  focus:border-[#339aef] "
            placeholder="휴대폰"
            
          />

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
      <div className="w-full flex text-center mt-10">
        <button className="text-black bg-gray-500 p-5 w-full rounded-full font-bold text-xl mb-5" type="submit">다음</button>
      </div>
      </form>
    </div>
    <div></div>
  </div>
    );
  
}