"use client";
import { MENU } from "@/config";
import { defaultSurahData } from "@/utils/surah-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#181820]">
      <div className="fixed top-0 z-50 flex h-14 w-full bg-[#181820] text-gray-600 sm:h-20">
        <div className="mx-auto flex  w-full max-w-xl items-center justify-between bg-[#333d29] px-3.5 sm:px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            className="h-7 w-7"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          <div className="w-full pl-4 text-left text-lg font-bold text-white sm:text-xl">
            Al Quran
          </div>
          <div className="w-6"></div>
        </div>
      </div>
      <div className="relative mt-8 left-1/2 top-0 w-full max-w-xl -translate-x-1/2 bg-white pt-20">
        <div className="px-6">
          <div className="mb-4">
            <div className="rounded-sm bg-[#656d4a] p-5 text-white">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  ></path>
                </svg>
                <span className="ml-2 text-sm">
                  Mulai One Day One Ayat sekarang!
                </span>
              </div>
            </div>
          </div>
          <div>
            {defaultSurahData?.map((v, k) => (
              <Link href={`${MENU.AL_QURAN_SURAH}/${v.number}`} key={k}>
                <div className="flex border-b border-gray-100 px-1 py-3.5">
                  <div className="flex-1">
                    <div className="text-slate-700">{v.number}. {v.englishName}</div>
                    <small className="text-slate-400">{v.englishNameTranslation}</small>
                  </div>
                  <div className="font-arabic my-auto flex-1 text-right text-2xl text-[#333d29]">
                  {v.name?.replace("سُورَةُ ", "")}
                  </div>
                </div>
              </Link>
            ))}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
