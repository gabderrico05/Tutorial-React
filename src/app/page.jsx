'use client'

import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import {useState, useEffect} from "react";

export default function Home(){

  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getMessages = async () => {
       const response = await fetch('http://localhost:3001/messages')
       const data = await response.json()
       setChat(data)
    }
    getMessages()
  },[])

  
  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3001/ia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question: message})
    })

    const data = await response.json()
    setChat([...chat, {message: message}, {message: data.response}])
    setMessage('')
  }



  return(
    <>
    <div className="flex flex-col max-h-screen max-w-screen"> {/* Define altura mínima da tela */}
      <header className="flex mx-4 my-3 justify-between">
        <Logo />
      </header>
      
      <main className="flex flex-row flex-grow h-screen my-1">
        <Navbar />

        {/* Área do chat */}

        <div className="flex-grow bg-stone-700 flex flex-col items-center rounded-md mx-2">
          <div className="flex-grow overflow-y-auto flex flex-col items-center pb-20 my-14">
            {chat.map((item, index) => (
               <div key={index}  className="bg-stone-900 rounded-md m-2 w-fit max-w-[500px] h-fit px-6 py-2">
                <p>{item.message}</p>
             </div> 
            ))}
          </div>

          {/* Caixa de entrada fixa */}
          <div className="fixed bottom-6 bg-zinc-700 flex items-center justify-center w-2/4 p-4 rounded-lg text-white text-center gap-2">
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full border border-zinc-900 rounded p-2 resize-none text-black"
            ></textarea>
            <button onClick={handleSubmit} className="bg-blue-500 px-4 py-2 rounded">Enviar</button>
          </div>
        </div>
      </main>
    </div>
  </>
  )
}