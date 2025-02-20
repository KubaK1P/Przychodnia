import { LoginForm } from "@app/app/components/form";
import Image from "next/image";
export default function Login() {
  return (
    <main className="w-full relative flex flex-wrap h-[100vh] shadow-md ">
      <div className="absolute image-wrapper min-h-[100vh] z-[-100]">
        <Image
          src="/przychodnia2.png"
          alt="main background"
          width="1920"
          height="953"
          className="h-auto aspect-[initial]">
        </Image>
      </div>
      <LoginForm />
    </main>
  );
}
