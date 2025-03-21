import Image from "next/image";
// import { IceCreamCone } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-[400px] h-[calc(100vh-96px)] flex items-center justify-center bg-white relative">


        {/*<div className="relative w-[600px] h-[200px]">*/}
        {/*  <Image src="/logo-big.png" alt="logo" width={600} height={200} className="object-contain"/>*/}
        {/*</div>*/}
        <div className="relative z-10 text-center flex flex-col gap-4 items-center">
          <Image src="/logo-big.png" alt="logo" width={600} height={200}/>
          {/* <h1 className="text-5xl font-bold flex gap-1 items-center justify-center">
          <IceCreamCone className="text-lime-500" size={60} />
          
        </h1> */}
          <p className="text-2xl">
            🍨 Benvenuto nel tuo assistente personale di ricette gelato!
          </p>
          <p className="text-2xl">
            Immagina il tuo gelato. Crealo e vivi un&apos;esperienza tutta italiana ✨
          </p>
          <SignedIn>
            <Button asChild size="lg">
              <Link href="/dashboard">Vai sul dashboard</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2 items-center justify-center">
              <Button asChild size="lg" className="bg-lime-600 hover:bg-lime-700">
                <SignInButton mode="modal"/>
              </Button>
              <Button asChild size="lg">
                <SignUpButton mode="modal"/>
              </Button>
            </div>
          </SignedOut>
        </div>
      </main>
  );
}
