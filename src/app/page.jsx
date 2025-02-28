import Footer from "@/components/Footer"
import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home(){

 

    const [chat, setChat] = useState([]);
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setChat([...chat, { message: message }]);
        const response = await fetch('http://localhost:3000/ia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: message })
        });

        const data = await response.json();
        setChat([...chat, { message: data.respons[any] }]);
        setMessage('');
      }
  return(
    <>
    <header className="flex  m-2 my-4 justify-between">
    <Logo/>
    </header>
    <main className="flex flex-row ">
      <Navbar/>
      <div className="w-screen h-screen bg-stone-700 flex flex-col items-center">
          <div>
            {chat.map((item, index) => (
              <div key={index} className="bg-stone-900 rounded-md m-2 w-[220px] h-fit p-2">
              <p>{item.message}</p>
            </div>
            
          ))}
          </div>

          <div>
            
          </div>
      </div>
      
    </main>
    <Footer/>
    </>
  )
}