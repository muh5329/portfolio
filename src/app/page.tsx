'use client'

import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import React from 'react'

interface SlidingPage {
  pageNumber: string;
  optionalName?: string;
  mainImage: string;
  pageSubtitle: string;
  linkTitle: string;
  selected: boolean | null;
}


const SlidingPage = (props: SlidingPage) => {
  const subtitleRef: React.RefObject<HTMLDivElement> = useRef(null);
  const imageConRef: React.RefObject<HTMLDivElement> = useRef(null);
  useGSAP(() => {

    if (props.selected) {
      gsap.to(subtitleRef.current, { fontSize: '100px' });
      gsap.to(imageConRef.current, { width: '600px' });
    } else {
      gsap.to(subtitleRef.current, { fontSize: '15px' });
      gsap.to(imageConRef.current, { width: '15px' });
    }
  }, [props.selected]);

  return (
    <div className="flex flex-col justify-between h-dvh">
      <div className="">
        <div className=" pl-4 text-sm pt-4 ">
          {props.optionalName}
        </div>
      </div>

      <div className="flex pt-1 h-[75%]">

        {props.selected &&
          <div className="w-10 pt-4 pl-4  text-lg">
            {"[" + props.pageNumber + "]"}
          </div>
        }

        <div className="justify-start pl-16 pt-6">

          <div ref={imageConRef} className="shadow-lg w-[1000px] h-[500px] overflow-hidden relative">
            <Image
              src={props.mainImage}
              layout='fill'
              alt="Picture of the author"
              objectFit='cover'
            />
          </div>


        </div>

      </div>


      <div className="flex justify-between pl-4 ">

        <div className="w-[60%] align-text-top  text-[15px] pb-10 " ref={subtitleRef}>
          {props.pageSubtitle}
        </div>

        {props.selected &&
          <div className="grid grid-rows-3 grid-flow-col gap-3 w-[30%] pr-7 ">

            <div className='row-span-1' />

            <div className=' row-span-2'>
              {/* line of full width */}
              <div className="border border-zinc-900 " />

              {/* subtitle */}
              <div className="flex justify-between pt-2 row-span-5 ">

                <div className=" text-m ">
                  {props.linkTitle}
                </div>

                <div className="">
                  {"-->"}
                </div>

              </div>

            </div>

          </div>

        }

      </div>
    </div >
  );
}

export default function HomePage() {
  const aboutRef: React.RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: React.RefObject<HTMLDivElement> = useRef(null);
  const socialsRef: React.RefObject<HTMLDivElement> = useRef(null);

  const pages = [aboutRef, projectsRef, socialsRef];

  const [selectedPage, setSelectedPage] = useState(aboutRef);

  const { contextSafe } = useGSAP();

  const slidingPageOnClick = contextSafe((ref: React.RefObject<HTMLDivElement>) => {
    setSelectedPage(ref)
    for (const page of pages) {
      if (page == ref) {
        gsap.to(page.current, { width: '100%' })
      } else {
        gsap.to(page.current, { width: 180 })
      }
    }

  });


  const isSelected = (ref: React.RefObject<HTMLDivElement>) => {
    return ref.current && selectedPage.current && ref.current == selectedPage.current;
  }
  const isSelectedDefaultRender = (ref: React.RefObject<HTMLDivElement>) => {
    return ref.current == selectedPage.current;
  }


  return (
    <main className='flex flex-row w-[100%] overflow-hidden'>

      <div ref={aboutRef} onClick={() => slidingPageOnClick(aboutRef)} className="w-[80%] bg-red-400 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          optionalName="Muneeb Haq"
          pageNumber="01"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="About Me"
          linkTitle="More About Me"
          selected={isSelectedDefaultRender(aboutRef)}
        />
      </div>

      <div ref={projectsRef} onClick={() => slidingPageOnClick(projectsRef)} className="w-[150px] bg-yellow-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="02"
          optionalName=". "
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Projects"
          linkTitle="See my projects"
          selected={isSelected(projectsRef)}
        />
      </div>


      <div ref={socialsRef} onClick={() => slidingPageOnClick(socialsRef)} className="w-[150px] bg-blue-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="03"
          optionalName=". "
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Socials"
          linkTitle="See my socials"
          selected={isSelected(socialsRef)}
        />
      </div>


    </main>
  );
} 
