import React from 'react';

function App() {
  return (
    <>
     <section>
     <div className="flex flex-col items-start bg-white">
      <div className="flex justify-center items-center self-stretch px-16 py-6 w-full text-base font-medium whitespace-nowrap bg-white border-b border-solid border-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1184px] max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-black">LOGO</div>
          <div className="flex gap-3 justify-center">
            <div className="my-auto text-right text-fuchsia-700">Login</div>
            <div className="justify-center px-6 py-3 text-fuchsia-50 rounded-2xl shadow-lg bg-[linear-gradient(180deg,#B73BBE_0%,#992E9D_93.51%)] max-md:px-5">
              Signup
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch px-2.5 pt-3 w-full text-base whitespace-nowrap bg-neutral-700 text-neutral-300 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 items-start">
          <div className="flex flex-col self-stretch font-medium text-white">
            <div>Overview</div>
            <div className="shrink-0 mt-2 h-1 bg-amber-500 rounded-xl" />
          </div>
          <div>Curriculum</div>
          <div>Refund</div>
          <div>Testimonials</div>
        </div>
      </div>
      <div className="flex gap-2.5 justify-center px-6 py-5 mt-20 ml-32 text-base font-medium bg-white rounded-2xl border border-amber-500 border-solid text-zinc-700 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c29d10d4cb059c5db3b7fd4f1cc2d4c810609dafc050ccaaa6bfc82cdf05d761?"
          className="shrink-0 my-auto w-6 aspect-square"
        />
        <div>
          <span className="text-xl leading-8 ">An</span>{" "}
          <span className="text-xl font-semibold leading-8">IIT Delhi</span>{" "}
          <span className="text-xl leading-8 ">Alumni Initiative</span>
        </div>
      </div>
      <div className="mt-6 ml-32 text-6xl font-bold tracking-tighter text-fuchsia-700 leading-[86px] w-[766px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
        <span className="leading-[67px] text-zinc-600">
          Become an Expert in the field of
        </span>{" "}
        <span className="text-fuchsia-700 leading-[67px]">
          Data Science with 6 courses
        </span>
      </div>
      <div className="mt-2 ml-32 text-xl text-zinc-700 max-md:max-w-full">
        A specially crafted Tech Kickstarter, with{" "}
        <span className="font-medium">5+ extensive online courses.</span>
      </div>
      <div className="flex flex-wrap gap-3.5 content-start pr-12 mt-6 ml-32 text-base font-medium tracking-tight text-amber-700 max-md:pr-5">
        <div className="flex gap-1.5 justify-center py-3 pr-4 pl-3 bg-amber-50 border border-amber-100 border-solid rounded-[100px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0293fc909a6eec44329a4318a17ba1a7f34e2701337e4ccf17a729bee17e7353?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Personal Mentorship</div>
        </div>
        <div className="flex gap-1.5 justify-center py-3 pr-4 pl-3 bg-amber-50 border border-amber-100 border-solid rounded-[100px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66f9b69054096f1eb70003c185834f65d38a92264135fdeca0b2e92c6892955d?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Internship Assistance</div>
        </div>
        <div className="flex gap-1.5 justify-center py-3 pr-4 pl-3 bg-amber-50 border border-amber-100 border-solid rounded-[100px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/754ec4d68b5056ac8ce8b28ce98d2d0a6d6c6912291245179eabff31236e9cea?"
            className="shrink-0 w-6 aspect-square"
          />
          <div>Industry Certified Courses</div>
        </div>
      </div>
      <div className="flex gap-3 mt-8 ml-32 text-lg font-semibold max-md:ml-2.5">
        <div className="flex gap-1.5 justify-center px-12 py-6 text-fuchsia-50 rounded-3xl shadow-2xl bg-[linear-gradient(180deg,#B73BBE_0%,#992E9D_93.51%)] max-md:px-5">
          <div>Enroll Now</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d9786be58763aa71d32f83f965fd59992c6f7c9039641458dd061eb5fb90a5?"
            className="shrink-0 my-auto aspect-square w-[22px]"
          />
        </div>
        <div className="flex gap-1.5 justify-center p-6 text-fuchsia-700 rounded-2xl max-md:px-5">
          <div>Know More</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd2b22ce9fc410f6bc2862a1013667056c6641748fa257459ac8281c02a13e5a?"
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-9 mt-16 w-full border border-fuchsia-100 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1184px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 self-stretch my-auto whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31d073c41c9d913ec2821f7a445896b617f8815a2a92eed55a6bd1dda9e3735a?"
              className="shrink-0 my-auto aspect-square w-[62px]"
            />
            <div className="flex flex-col">
              <div className="text-4xl font-medium leading-10 text-fuchsia-700">
                24
              </div>
              <div className="text-2xl leading-7 text-zinc-500">Courses</div>
            </div>
          </div>
          <div className="shrink-0 self-stretch w-px bg-fuchsia-200 h-[100px]" />
          <div className="flex gap-3 self-stretch my-auto whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9f8335c9125926f8acae981d72764596a6bfdf2c36c30a2c178df97403e2e5e?"
              className="shrink-0 my-auto aspect-square w-[62px]"
            />
            <div className="flex flex-col">
              <div className="text-4xl font-medium leading-10 text-fuchsia-700">
                30k+
              </div>
              <div className="text-2xl leading-7 text-zinc-500">Learners</div>
            </div>
          </div>
          <div className="shrink-0 self-stretch w-px bg-fuchsia-200 h-[100px]" />
          <div className="flex gap-3 self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58ee0cd23cd6391f91cba7b6869acf3ff475cb02c9518230482a4215c4b7c744?"
              className="shrink-0 my-auto aspect-square w-[62px]"
            />
            <div className="flex flex-col">
              <div className="text-4xl font-medium leading-10 text-fuchsia-700">
                100k+
              </div>
              <div className="text-2xl leading-7 text-zinc-500">
                Doubts Solved
              </div>
            </div>
          </div>
          <div className="shrink-0 self-stretch w-px bg-fuchsia-200 h-[100px]" />
          <div className="flex gap-3 self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e15a08582b6b4ed20a75791ac7ebd4e6812c5f9af6b50abb7ffdc82cc3a3d39?"
              className="shrink-0 my-auto aspect-square w-[62px]"
            />
            <div className="flex flex-col">
              <div className="text-4xl font-medium leading-10 text-fuchsia-700">
                10k+
              </div>
              <div className="text-2xl leading-7 text-zinc-500">
                Student Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
    <section>
      <div className="flex justify-center items-center px-16 py-20 bg-fuchsia-50 max-md:px-5">
      <div className="flex flex-col items-center mt-8 w-full max-w-[1184px] max-md:max-w-full">
        <div className="justify-center px-7 py-4 text-xl tracking-tight text-center text-fuchsia-700 bg-fuchsia-100 border border-fuchsia-200 border-solid rounded-[1000px] max-md:px-5">
          DATASCIENCE COURSE LEARNING PATH
        </div>
        <div className="mt-5 text-5xl font-bold tracking-tighter text-center bg-clip-text text-neutral-600 max-md:max-w-full max-md:text-4xl">
          Data Science Course Curriculum
        </div>
        <div className="flex flex-col self-stretch mt-14 rounded-3xl border border-solid border-zinc-200 max-md:mt-10 max-md:max-w-full">
          <div className="justify-center p-7 bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-semibold text-neutral-600 max-md:max-w-full">
                    C++
                  </div>
                  <div className="text-xl text-zinc-500 max-md:max-w-full">
                    Learn C++ for strong programming fundamentals.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 justify-center self-stretch px-6 py-5 my-auto w-full text-xl font-medium text-center text-fuchsia-600 bg-fuchsia-50 border border-fuchsia-100 border-solid rounded-[1000px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a8199463665ddfacba098bde063b496e4ad2c4ffca225eb409757ff858b18a?"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div>View Curriculum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center p-7 bg-white border-t border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-semibold text-neutral-600 max-md:max-w-full">
                    MERN Stack
                  </div>
                  <div className="text-xl text-zinc-500 max-md:max-w-full">
                    Master the MERN stack for high-demand projects.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 justify-center self-stretch px-6 py-5 my-auto w-full text-xl font-medium text-center text-fuchsia-600 bg-fuchsia-50 border border-fuchsia-100 border-solid rounded-[1000px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b24d96ae9a22f07231a58a3aafd6c4de0f841177d52c249cc952d0f82f0a6c1?"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div>View Curriculum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center p-7 bg-white border-t border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-semibold text-neutral-600 max-md:max-w-full">
                    Data Structure & Algorithm
                  </div>
                  <div className="text-xl text-zinc-500 max-md:max-w-full">
                    Excel in Data Structures and Algorithms for interview
                    success.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 justify-center self-stretch px-6 py-5 my-auto w-full text-xl font-medium text-center text-fuchsia-600 bg-fuchsia-50 border border-fuchsia-100 border-solid rounded-[1000px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d0a47e774f2e29779df1f0a9e326f9e0136306282b81db24e1ef7630410e71?"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div>View Curriculum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center p-7 bg-white border-t border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-semibold text-neutral-600 max-md:max-w-full">
                    Competitve Programming
                  </div>
                  <div className="text-xl text-zinc-500 max-md:max-w-full">
                    Excel in Data Structures and Algorithms for interview
                    success.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 justify-center self-stretch px-6 py-5 my-auto w-full text-xl font-medium text-center text-fuchsia-600 bg-fuchsia-50 border border-fuchsia-100 border-solid rounded-[1000px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fab5e5ac0ece7b10d024620d071d2644fd1a2f38b1b9de82c93d604b868b03ce?"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div>View Curriculum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
      <div className="flex justify-center items-center px-16 py-16 bg-white max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1094px] max-md:max-w-full">
        <div className="text-5xl font-bold tracking-tighter text-center bg-clip-text bg-[linear-gradient(180deg,#B73BBE_0%,#992E9D_93.51%)] text-zinc-500 max-md:max-w-full max-md:text-4xl">
          Don't miss out on this limited-time opportunity to learn for Free!
        </div>
        <div className="flex flex-col justify-center px-5 py-8 mt-14 max-w-full shadow-2xl bg-[linear-gradient(180deg,#9849FF_0%,#841EE3_93.51%)] rounded-[32px] w-[598px] max-md:mt-10">
          <div className="self-center text-3xl font-bold text-center text-white">
            100% Refund Offer 😎{" "}
          </div>
          <div className="mt-3 text-lg font-medium text-white text-opacity-70 max-md:max-w-full">
            20 Seats Left
          </div>
          <div className="flex gap-0 pr-20 mt-3.5 bg-white bg-opacity-10 rounded-[100px] max-md:flex-wrap max-md:pr-5">
            <div className="shrink-0 h-2.5 bg-amber-400 shadow-sm rounded-[100px] w-[159px]" />
            <div className="shrink-0 h-2.5 bg-amber-400 rounded-full border-white border-solid border-[3px] stroke-[3px] w-[22px]" />
          </div>
          <div className="flex gap-1 justify-center self-center mt-3.5 text-xl font-medium text-center text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12366013629dd942f90c2661d661b8ef619e914e6b323b26488bc7c3e9e9da4d?"
              className="shrink-0 self-start w-7 aspect-square"
            />
            <div>Offer ends in 10:00Mins</div>
          </div>
        </div>
        <div className="mt-14 text-4xl font-bold tracking-tighter text-center text-fuchsia-950 max-md:mt-10">
          How does it work?
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                <div className="flex overflow-hidden relative flex-col justify-center self-center px-6 py-2 text-base font-medium tracking-tight text-center text-fuchsia-50 aspect-[2.3] fill-fuchsia-700 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/773ce2d6eed4e462e67629e9bf1d9f74663db24145a5981fe7b247984d73e381?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  Step 1
                </div>
                <div className="flex flex-col p-5 mt-6 rounded-3xl border border-fuchsia-100 border-solid">
                  <div className="text-xl font-semibold tracking-tight text-fuchsia-800">
                    Step 1 : Enroll into your favorite course for only ₹1,499
                  </div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-center mt-8 max-w-full aspect-[1.47] w-[102px]"
                  />
                  <div className="mt-8 text-sm font-medium text-zinc-900">
                    Start Learning with{" "}
                    <span className="font-semibold text-zinc-900">
                      Lifetime Course Access.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                <div className="flex overflow-hidden relative flex-col justify-center self-center px-6 py-2 text-base font-medium tracking-tight text-center text-fuchsia-50 aspect-[2.4] fill-fuchsia-700 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aa44bbe913d3afdaae3ab31f70a19ef8ce97ead251b467dc4096704b7e86d17?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  Step 2
                </div>
                <div className="flex flex-col p-5 mt-6 w-full rounded-3xl border border-fuchsia-100 border-solid">
                  <div className="text-xl font-semibold tracking-tight text-fuchsia-800">
                    Step 2: Complete Course & Assignments within 2 Years!
                  </div>
                  <div className="flex gap-2 justify-center px-4 py-2.5 mt-4 rounded-2xl border border-solid border-zinc-200">
                    <div className="text-4xl font-bold tracking-tighter bg-clip-text bg-[linear-gradient(180deg,#FFA50B_0%,#E27900_93.51%)]">
                      2
                    </div>
                    <div className="flex-1 my-auto text-sm tracking-tight text-neutral-600">
                      years time from the date of enrollment
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-medium text-zinc-900">
                    Finish the course within{" "}
                    <span className="font-semibold text-zinc-900">2 Years</span>{" "}
                    to Qualify for Refund.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                <div className="flex overflow-hidden relative flex-col justify-center self-center px-6 py-2 text-base font-medium tracking-tight text-center text-fuchsia-50 aspect-[2.4] fill-fuchsia-700 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aa44bbe913d3afdaae3ab31f70a19ef8ce97ead251b467dc4096704b7e86d17?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  Step 3
                </div>
                <div className="flex flex-col p-5 mt-6 w-full rounded-3xl border border-fuchsia-100 border-solid">
                  <div className="text-xl font-semibold tracking-tight text-fuchsia-800">
                    Step 3: Receive 100% Refund upon completion
                  </div>
                  <div className="flex gap-2 justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200">
                    <div className="text-3xl font-bold tracking-tighter bg-clip-text bg-[linear-gradient(180deg,#FFA50B_0%,#E27900_93.51%)]">
                      100%
                    </div>
                    <div className="flex-1 my-auto text-sm tracking-tight text-neutral-600">
                      Enrollment Fee is refunded
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-medium text-zinc-900">
                    Upon Course Completion within{" "}
                    <span className="font-bold text-zinc-900">2 Years</span>,
                    Get Your{" "}
                    <span className="font-semibold text-zinc-900">
                      ₹1,499 Back.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
      <div className="flex flex-col py-12 text-center bg-amber-50 text-slate-700">
      <div className="self-center text-5xl font-bold tracking-tighter bg-clip-text max-md:max-w-full max-md:text-4xl">
        <span className="text-slate-700">Top Companies Hiring</span> Data
        Scientist
      </div>
      <div className="flex gap-5 justify-center px-5 mt-7 w-full text-3xl font-medium tracking-tighter capitalize whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="shrink-0 p-2.5 w-3 bg-white rounded-3xl h-[133px] max-md:hidden" />
        <div className="justify-center items-center p-2.5 bg-white rounded-3xl max-md:px-5">
          Logo
        </div>
        <div className="justify-center items-center p-2.5 bg-white rounded-3xl max-md:px-5">
          Logo
        </div>
        <div className="justify-center items-center p-2.5 bg-white rounded-3xl max-md:px-5">
          Logo
        </div>
        <div className="justify-center items-center p-2.5 bg-white rounded-3xl max-md:px-5">
          Logo
        </div>
        <div className="justify-center items-center p-2.5 bg-white rounded-3xl max-md:px-5">
          Logo
        </div>
        <div className="shrink-0 p-2.5 bg-white rounded-3xl h-[133px] w-[11px] max-md:hidden" />
      </div>
    </div>
    </section>

    <section>
      <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col mt-4 w-full max-w-[1184px] max-md:max-w-full">
        <div className="text-5xl font-semibold text-center text-fuchsia-700 max-md:max-w-full max-md:text-4xl">
          Unlock <span className="text-fuchsia-700">6 Certificates</span> &{" "}
          <span className="text-fuchsia-700">Internship Opportunities!</span>
        </div>
        <div className="justify-center mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between self-stretch p-9 w-full bg-fuchsia-50 border border-fuchsia-100 border-solid rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold text-center text-fuchsia-950 max-md:max-w-full">
                  Get 6 Industry Recognized Certificates!
                </div>
                <div className="flex flex-col justify-center mx-6 mt-8 bg-white rounded-xl border border-solid shadow-2xl border-zinc-200 max-md:mr-2.5 max-md:max-w-full">
                  <div className="overflow-hidden max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 py-5 w-full text-xs font-semibold text-pink-100 uppercase max-md:pr-5 max-md:mt-6">
                          <div>
                            <span className=" text-zinc-200">
                              Certificate-ID:
                            </span>{" "}
                            <span className="text-pink-100">
                              TD-UIUX-2023-234{" "}
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className=" text-zinc-200">
                              DatE of issue:
                            </span>{" "}
                            <span className="text-pink-100">
                              September 6, 2023
                            </span>
                          </div>
                          <div className="justify-center p-1.5 mt-20 text-xs tracking-wide border border-pink-100 border-solid max-md:mt-10">
                            UI UX DESIGNING
                          </div>
                          <div className="mt-3 text-lg">
                            CERTIFICATEOFCompletion
                          </div>
                          <div className="mt-24 text-xs font-medium text-white max-md:mt-10">
                            www.LOGO.com
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                          <div className="flex gap-5 text-xs text-gray-500">
                            <img
                              loading="lazy"
                              srcSet="..."
                              className="shrink-0 aspect-[3.13] w-[59px]"
                            />
                            <div className="flex-auto my-auto underline">
                              <span className="font-medium">Verify at</span>{" "}
                              <span className="underline">
                                www.LOGO.com/verify-certificate
                              </span>
                            </div>
                          </div>
                          <div className="mt-20 text-xs tracking-wide text-gray-400 uppercase max-md:mt-10">
                            This Certificate is proudly presented to
                          </div>
                          <div className="mt-2 text-xl font-semibold text-slate-700">
                            John Doe
                          </div>
                          <div className="mt-4 text-xs leading-3 text-gray-500">
                            This certifies that John Doe completed the UI UX
                            Designing course on September 22, 2023. All
                            coursework and assessments were successfully
                            finished to meet LOGO's standards. LOGO wishes you
                            the best in all your future endeavors.
                          </div>
                          <div className="flex gap-5 justify-between mt-16 ml-6 max-w-full text-lg whitespace-nowrap text-zinc-600 w-[164px] max-md:mt-10 max-md:ml-2.5">
                            <div>Sample</div>
                            <div>Sample</div>
                          </div>
                          <div className="flex gap-5 justify-between pr-12 mt-1 max-md:pr-5">
                            <div className="flex flex-col px-5 py-0.5">
                              <div className="text-xs font-medium text-slate-700">
                                Shivam Goyal
                              </div>
                              <div className="mt-1 text-xs text-gray-400">
                                Co Founder
                              </div>
                            </div>
                            <div className="flex flex-col px-2.5 py-0.5">
                              <div className="text-xs font-medium text-slate-700">
                                Abhishek Gangwar
                              </div>
                              <div className="self-center mt-1 text-xs text-gray-400">
                                Co Founder
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3.5 justify-center px-8 mt-8 text-base font-medium tracking-tight text-fuchsia-700 max-md:flex-wrap max-md:px-5">
                  <div className="flex gap-1.5 justify-center py-3 pr-4 pl-3 bg-fuchsia-100 border border-fuchsia-200 border-solid rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7471c6e1c9a3cbccdd1e0936ab0fe3f99e3266b4430059e4a67b875ca5d2728f?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div>Official and Verified</div>
                  </div>
                  <div className="flex gap-1.5 justify-center py-3 pr-4 pl-3 bg-fuchsia-100 border border-fuchsia-200 border-solid rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e62e03d642f251664da408466a4b8bb0c009d33756c91babe856a630ebaaa6?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div>Enhances Credibility</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-7 w-full bg-amber-50 rounded-3xl border border-amber-100 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold text-amber-950 max-md:max-w-full">
                  Bag Internship Opportunities!
                </div>
                <div className="mt-1 text-base text-zinc-500 max-md:max-w-full">
                  With every course, we make you not only industry-ready but
                  also help you crack your first internship.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c01632c35037410209fd717438fac3a543fb0f407474d120ec31a1faed5adb?"
                  className="self-center mt-5 max-w-full aspect-square w-[417px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
      <div className="flex justify-center items-center px-16 py-20 text-base font-semibold bg-white max-md:px-5">
      <div className="flex flex-col items-center mt-3.5 w-full max-w-[1142px] max-md:max-w-full">
        <div className="text-4xl font-bold text-center bg-clip-text bg-[linear-gradient(180deg,#B872D0_0%,#372FAA_100%)] max-md:max-w-full">
          How does the Internship Program works ?
        </div>
        <div className="flex gap-5 items-start self-stretch mt-12 text-indigo-950 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-1 gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73963a0afba195b187beba256964688e482c3826e70ca70d4996f8c25c1bbe83?"
              className="shrink-0 self-start w-16 aspect-square"
            />
            <div className="flex-auto">
              Learn from our structured pre recorded courses made by experts to
              meet industry needs
            </div>
          </div>
          <div className="flex flex-1 gap-4 mt-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf3f05e5e4b53055c04238ea0b6f48819db044bc8279d22979cf057c053def6b?"
              className="shrink-0 self-start w-16 aspect-square"
            />
            <div className="flex-auto">
              Personal mentors to guide and help you throughout your journey as
              a friend
            </div>
          </div>
          <div className="flex flex-1 gap-4 self-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3101a0940feeb16e9aaf185640bad4ef10cdddf55ca5d2656090cb388f8629ba?"
              className="shrink-0 self-start mt-1.5 w-16 aspect-square"
            />
            <div className="flex-auto">
              Get guaranteed paid internships after completion of the program
              along with course completion certificates
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-20 max-w-full text-indigo-950 w-[779px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-1 flex-auto gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4691f021002496e3138471af7a04291707ebad8ce3a5eac14e93f730052037ed?"
              className="shrink-0 self-start w-16 aspect-square"
            />
            <div className="flex-auto">
              1:1 live doubt solving support available throughout the day to
              clear your doubts instantly{" "}
            </div>
          </div>
          <div className="flex flex-1 flex-auto gap-3.5 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfe5169845bf4773f121776afbf97a25f593469271501a25a42eb5fe2fe91070?"
              className="shrink-0 w-16 aspect-square"
            />
            <div className="flex-auto my-auto">
              Build major projects which makes your resume stand apart{" "}
            </div>
          </div>
        </div>
        <div className="justify-center px-7 py-4 mt-9 text-center text-white rounded-xl shadow bg-[linear-gradient(176deg,#800080_-2.53%,#7E267E_27.29%)] leading-[123.5%] max-md:px-5">
          Apply now for ₹ 2999
        </div>
      </div>
    </div>
    </section>

    </>
  );
};

export default App
