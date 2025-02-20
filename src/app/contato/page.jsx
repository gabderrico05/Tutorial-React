import Footer from "@/components/Footer"
import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Contato(){
  return(
    <>
    <header className="flex bg-slate-500 p-6 m-2 justify-center">
      <Logo/>

    </header>
    <main>
      <p>Contato : 12 996802044</p>
     <Link href='/'>ir para home</Link>
    </main>
    <Footer/>
    </>
  )
} 