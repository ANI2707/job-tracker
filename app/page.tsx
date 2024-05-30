import Image from "next/image";
import main from "../assets/main.jpg"
import landing from "../assets/landing.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image className="max-w-xs" src={main} alt="logo" width={200} height={200}/>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,600px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            <span className="text-primary">effortless</span> <br />job management
          </h1>
          <p>Take control of your job search with our easy-to-use app that helps you manage applications, track progess, and stay organized every step of the way</p>
          <Button className="mt-4" asChild>
            <Link href="/add-job">Get Started</Link>
          </Button>

        </div>
        <Image src={landing} alt="landing" className=" hidden lg:block  w-5/6"/>
      </section>
    </main>
  );
}
