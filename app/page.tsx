"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#181820]">
      <div className="fixed top-0 z-50 flex h-14 w-full bg-[#181820] text-gray-600 sm:h-20">
        <div className="mx-auto flex  w-full max-w-xl items-center justify-between bg-blue-400 px-3.5 sm:px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          <div className="w-full pl-4 text-left text-lg font-bold text-slate-700 sm:text-xl">
            Al Quran
          </div>
          <div className="w-6"></div>
        </div>
      </div>
      <div className="relative left-1/2 top-0 w-full max-w-xl -translate-x-1/2 bg-green-200 pt-20">
        <div className="px-6">
          <div className="mb-4">
            <div className="mt-2 text-sm text-gray-400">Assalamualaikum</div>
            <div className="text-2xl font-bold text-blue-400">
              Dzulfan Fadli
            </div>
          </div>
          <div className="mb-4">
            <div className="rounded-xl bg-gradient-to-r from-green-400 to-blue-400 p-5 text-white">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            <a href="/surah/1">
              <div className="flex border-b border-gray-100 px-1 py-3.5">
                <div className="flex-1">
                  <div className="text-slate-700">1. Al-Faatiha</div>
                  <small className="text-slate-400">The Opening</small>
                </div>
                <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                  ٱلْفَاتِحَةِ
                </div>
              </div>
            </a>
            <a href="/surah/2">
              <div className="flex border-b border-gray-100 px-1 py-3.5">
                <div className="flex-1">
                  <div className="text-slate-700">2. Al-Baqara</div>
                  <small className="text-slate-400">The Cow</small>
                </div>
                <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                  البَقَرَةِ
                </div>
              </div>
            </a>
            <a href="/surah/3">
              <div className="flex border-b border-gray-100 px-1 py-3.5">
                <div className="flex-1">
                  <div className="text-slate-700">3. Aal-i-Imraan</div>
                  <small className="text-slate-400">The Family of Imraan</small>
                </div>
                <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                  آلِ عِمۡرَانَ
                </div>
              </div>
            </a>
            <a href="/surah/4">
              <div className="flex border-b border-gray-100 px-1 py-3.5">
                <div className="flex-1">
                  <div className="text-slate-700">4. An-Nisaa</div>
                  <small className="text-slate-400">The Women</small>
                </div>
                <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                  النِّسَاءِ
                </div>
              </div>
            </a>
            <a href="/surah/5">
              <div className="flex border-b border-gray-100 px-1 py-3.5">
                <div className="flex-1">
                  <div className="text-slate-700">5. Al-Maaida</div>
                  <small className="text-slate-400">The Table</small>
                </div>
                <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                  المَائـِدَةِ
                </div>
              </div>
            </a>
          </div>
          <a href="/surah/1">
            <div className="flex border-b border-gray-100 px-1 py-3.5">
              <div className="flex-1">
                <div className="text-slate-700">1. Al-Faatiha</div>
                <small className="text-slate-400">The Opening</small>
              </div>
              <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                ٱلْفَاتِحَةِ
              </div>
            </div>
          </a>
          <a href="/surah/2">
            <div className="flex border-b border-gray-100 px-1 py-3.5">
              <div className="flex-1">
                <div className="text-slate-700">2. Al-Baqara</div>
                <small className="text-slate-400">The Cow</small>
              </div>
              <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                البَقَرَةِ
              </div>
            </div>
          </a>
          <a href="/surah/3">
            <div className="flex border-b border-gray-100 px-1 py-3.5">
              <div className="flex-1">
                <div className="text-slate-700">3. Aal-i-Imraan</div>
                <small className="text-slate-400">The Family of Imraan</small>
              </div>
              <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                آلِ عِمۡرَانَ
              </div>
            </div>
          </a>
          <a href="/surah/4">
            <div className="flex border-b border-gray-100 px-1 py-3.5">
              <div className="flex-1">
                <div className="text-slate-700">4. An-Nisaa</div>
                <small className="text-slate-400">The Women</small>
              </div>
              <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                النِّسَاءِ
              </div>
            </div>
          </a>
          <a href="/surah/5">
            <div className="flex border-b border-gray-100 px-1 py-3.5">
              <div className="flex-1">
                <div className="text-slate-700">5. Al-Maaida</div>
                <small className="text-slate-400">The Table</small>
              </div>
              <div className="font-arabic my-auto flex-1 text-right text-2xl text-green-500/70">
                المَائـِدَةِ
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
