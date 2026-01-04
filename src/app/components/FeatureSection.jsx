"use client";
import React, { useEffect } from 'react'
import Image from "next/image";
useEffect
const FeatureCard = () => {
  return (
    <div className="w-48 md:w-60 lg:w-75 rounded-xl bg-white p-2 md:p-3 lg:p-4 shadow-xl">
      <div className="flex items-center gap-1 lg:gap-3">
       
        <div>
          <p className="text-[0.5rem] md:text-[0.6rem] lg:text-xs leading-2 sm:leading-4 mb-0 text-gray-500 mt-1">
            Real-time updates for students, parents, and teachers.
            Fast & Secure Messaging
          </p>
          <h4 className="font-normal text-[0.6rem] md:text-[0.7rem] lg:text-sm">
            students, parents, and teachers.
          </h4>
          
        </div>
         <div className="h-8 w-8 md:h-9 md:w-9 lg:h-12 lg:w-12 rounded-full bg-purple-500 flex-shrink-0"> </div>
      </div>
    </div>
  );
};
const FeatureSection = () => {
  return (
   <section data-scroll-section className=" ">
      <div className="FeatureSection container relative mx-auto mt-10 min-h-fit">
         <div className="feature-center relative mt-20 mx-auto
                            w-[55vw] h-[55vw]          
    sm:w-[300px] sm:h-[300px]
    md:w-[400px] md:h-[400px]
    lg:w-[500px] lg:h-[500px]
    xl:w-[600px] xl:h-[600px]
                          ">
            <Image
              src="/images/mobile2.png"
              alt="SchoolAura"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Top */}
          <div className="feature-1 absolute">
            <FeatureCard />
          </div>

          {/* Right */}
          <div className="feature-2 absolute ">
            <FeatureCard />
          </div>

          {/* Bottom */}
          <div className="feature-3 absolute ">
            <FeatureCard />
          </div>

          {/* Left */}
          <div className="feature-4  absolute ">
            <FeatureCard />
          </div>
      </div>
    </section>
  )
}

export default FeatureSection