import PrzychodniaDesc from "./components/przychodniaDesc";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full relative h-[100vh] overflow-hidden flex justify-center items-center z-[-100]">
      <div className="absolute image-wrapper min-h-[100vh] z-[-100]">
        <Image
          src="/przychodnia2.png"
          alt="main background"
          width="1920"
          height="953"
          className="h-auto"
          style="aspect-ratio: initial" />
      </div>
      <h1 className=" text-6xl font-bold text-white tracking-wide">
        Przychodnia++
      </h1>
    </main>
  );
}
