import { RegisterForm } from "@app/app/components/form";
import Image from "next/image";
export default function Register() {
  return (
    <main className="w-full flex relative flex-wrap min-h-[100vh]  shadow-md">
      <div className="absolute image-wrapper min-h-[100vh] z-[100]">
        <Image
          src="/przychodnia2.png"
          alt="main background"
          width="1920"
          height="953"
          className="h-auto"
          style="aspect-ratio: initial" />
      </div>
      <RegisterForm />
    </main>
  );
}
