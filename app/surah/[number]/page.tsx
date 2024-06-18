"use server";
import { AL_QURAN_EDITION, API_SURAH_URL, MENU } from "@/config";
import { Surah } from "@/interfaces";
import { getCombinedAyat, getSurahName } from "@/utils/misc";
import { Metadata, GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

async function getData(params:string) {
  let listOfAyat : any[] = [];
  const res = await fetch(`${API_SURAH_URL}/${params}/editions/${AL_QURAN_EDITION}`);
  const data = await res.json();
  if (data?.data?.length > 0) {
     listOfAyat = getCombinedAyat(data.data)
  }
  
  return listOfAyat; 
}

async function currentData(params:string) {
  let currentSurah =  [];
  const res = await fetch(`${API_SURAH_URL}/${params}`);
  const data = await res.json();
  
  currentSurah = data?.data;
  
  return currentSurah; 
}
export default async function Detail({params}:{params:{number:string}}) {

  const dataSurah = await getData(params.number);
  const currentSurah = await currentData(params.number);

  return (
    <div className="bg-[#181820]">
        <div className="fixed left-1/2 top-0 z-20 flex h-14 w-full -translate-x-1/2 bg-[#181820] text-gray-600 sm:h-20">
          <div className="mx-auto flex w-full w-full max-w-xl items-center justify-between bg-slate-200 px-3.5 sm:px-5">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                ></path>
              </svg>
            </a>
            <div className="w-full pl-4 text-left text-lg font-bold text-slate-700 sm:text-xl">
              Surah {currentSurah?.englishName}
            </div>
          </div>
        </div>
        
          
        <div className="relative left-1/2 top-0 w-full max-w-xl -translate-x-1/2 bg-white py-20">
          <div className="px-3.5">
            <div className="mx-3.5 mb-8 mt-4 rounded-sm bg-gradient-to-bl from-green-500 to-blue-400 px-3 py-12 text-center font-semibold text-white drop-shadow-xl sm:mx-auto sm:max-w-sm">
              <div
                className="font-arabic undefined text-xl font-thin font-thin leading-10 sm:text-2xl sm:leading-loose"
                translate="no"
                style={{ direction: "rtl" }}
              >
                {currentSurah?.name}
              </div>
              <div className="my-2 text-2xl font-semibold sm:text-3xl">
                {currentSurah?.englishName}
              </div>
              <div className="sm:text-md text-sm font-thin">{currentSurah?.englishNameTranslation}</div>
              <hr className="mx-auto my-4 w-2/3 opacity-50" />
              <small className="">
                {currentSurah?.revelationType} &nbsp;&nbsp;-&nbsp;&nbsp; Surah ke {currentSurah?.number}
                &nbsp;&nbsp;-&nbsp;&nbsp; {currentSurah?.numberOfAyahs} Ayat
              </small>
            </div>

            {dataSurah.map(({ text, textTranslation, number, numberInSurah }) => (
              <div className="border-gray-200 px-3.5 py-8 sm:px-6" key={number}>
                <div
                  className="font-arabic mb-4 text-2xl font-thin leading-10 sm:text-3xl sm:leading-loose"
                  translate="no"
                  style={{ direction: "rtl" }}
                >
                  {text}
                </div>
                <div className="sm:text-md text-sm">
                  {textTranslation}
                  ({numberInSurah})
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 left-1/2 w-full max-w-xl -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 px-3.5 py-3.5 text-white sm:px-5 sm:py-5">
          <div className="mx-auto flex w-full max-w-xl">
            <div className="align-center flex flex-1 lg:pl-2">
              {currentSurah?.number < 114 &&

              <Link className="color-grey flex items-center text-sm" href={`${MENU.AL_QURAN_SURAH}/${currentSurah?.number + 1}`}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-1 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {getSurahName(currentSurah?.number + 1)}
              </Link>
              }
            </div>
            <div className="flex-1 pt-1 text-center text-sm"></div>
            <div className="flex-1 text-right lg:pr-2">
              {currentSurah?.number > 1 &&
                <Link href={getSurahName(currentSurah?.number - 1)} className="color-grey flex items-center justify-end text-sm">
                {getSurahName(currentSurah?.number - 1)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
  )
}


