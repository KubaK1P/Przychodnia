"use client";

import Image from "next/image";
import { ReactNode } from "react";

export default function PrzychodniaDesc({ imageSrc, children }: { imageSrc: string, children: ReactNode }) {
  return (
    <div
      className="m-6
      basis-[100%] flex justify-between items-center bg-sky-100 p-4 rounded-md shadow-md"
    >
      <p className="basis-[40%] text-gray-800">
        {children}
      </p>
      <Image
        src={imageSrc}
        alt="przychodnia"
        width="500"
        height="500"
        className="rounded-md"
      ></Image>
    </div>
  );
}
