import Footer from "@/components/Footer"
import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home(){
  return(
    <>
    <header className="flex bg-slate-500 p-6 m-2 justify-center">
      <Logo/>
    </header>
    <main>
      <Navbar/>
     <Link href='/contato'>ir para contato</Link>
    </main>
    <Footer/>
    </>
  )
} 