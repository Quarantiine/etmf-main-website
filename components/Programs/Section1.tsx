"use client";

import Image from "next/image";
import React from "react";

export default function Section1(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-20 w-full h-fit border-b-[25px] border-[#4BF2C7] relative">
        <div className="placeholder-bg" />

        <Image
          className="object-cover inset-0 z-0"
          src={
            "https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/brjgvrkjyqpit2zn3hrg"
          }
          alt="image"
          fill
          priority={true}
          sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
          <div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
            <h1 className="montserrat-bold text-4xl md:text-5xl">Department of Education Programs</h1>
            <p>
              Our Department of Education collaborates with educational institutions to deliver innovative programs, fostering a growth mindset, developing essential skills, and paving the way for student success and workforce readiness, ultimately leading to wider economic development.
            </p>

            {/* Colored dots for design purposes */}
            <div className="flex justify-start items-center gap-8">
              {/* Hidden on smaller screens, visible on larger screens */}
              <div className="hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
              {/* Visible colored dots */}
              <div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
              <div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
              <div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
              <div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
