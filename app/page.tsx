import Image from "next/image";
import NavBar from "./components/NavBar";
import Link from "next/link";
import { Button } from "flowbite-react";


//

export default function Home() {
  return (
    <div  className= "h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}>
      <main className="">
        <NavBar></NavBar>
        <div>

      <div>
      <h1 className="text-5xl text-center font-bold mt-25">
        Pick a Game
      </h1>
      </div>


    <div className="grid grid-cols-3 gap-10 mt-25 w-3/5 mx-auto">
    <Link href="/pages/SayHello">
        <Button color="dark" className="w-5/5">Say Hello</Button>
    </Link>
    <Link href="/pages/WakeUp">
        <Button color="dark" className="w-5/5">Wake Up</Button>
    </Link>
    <Link href="/pages/ReverseAlphabet">
        <Button color="dark" className="w-5/5">Reverse Alphabet</Button>
    </Link>
    <Link href="/pages/OddorEven">
        <Button color="dark" className="w-5/5">Odd or Even</Button>
    </Link>
    <Link href="/pages/Magic8Ball">
        <Button color="dark" className="w-5/5">Magic 8 Ball</Button>
    </Link>
    <Link href="/pages/ReverseNumber">
        <Button color="dark" className="w-5/5">Reverse Number</Button>
    </Link>

    <Link href="/pages/MadLib">
        <Button color="dark" className="w-5/5">Mad Lib</Button>
    </Link>

    <Link href="/pages/Adding">
        <Button color="dark" className="w-5/5">Adding</Button>
    </Link>
    <Link href="/pages/GuessIt">
        <Button color="dark" className="w-5/5">Guess It</Button>
    </Link>
    <Link href="/pages/ResturantPicker">
        <Button color="dark" className="w-5/5">Restaurant Picker</Button>
    </Link>

      </div>
    </div>
        
        
      </main>
    </div>
  );
}
