import Dice from './assets/icon-dice.svg'
import { useState, useEffect } from 'react'

function App() {
  const [number, setNumber] = useState(106)
  const [datas,   setDatas] = useState([])

  const api = async () => {
    const math = Math.floor(Math.random() * 199)
    setNumber(math)
    const advice = await fetch(`https://api.adviceslip.com/advice/${number}`)
    const respon = await advice.json()
    setDatas(respon.slip)
    console.log('Keep it up! -Zedd')
  }

  useEffect(() => {
    api()
  }, [])
  return (
    <div className="max-w-xl mx-auto h-screen px-5 relative">
        <div  className='h-[320px] flex justify-center flex-col rounded-xl bg-bg2 px-5 items-center my-40'>
          <h4 className='text-xs py-5 text-font2'>ADVICE #{datas.id}</h4>
          <h2 className='font-extrabold text-2xl text-center text-font1'>{datas.advice}</h2>
          <div className='flex gap-2 justify-center items-center my-5'>
            <span className='h-1 w-36 bg-bg1 rounded-xl'></span>
            <span className='font-extrabold text-xl rounded-xl'>l</span>
            <span className='font-extrabold text-xl rounded-xl'>l</span>
            <span className='h-1 w-36 bg-bg1 rounded-xl'></span>
          </div>
          <button onClick={api} className='z-30 outline-none absolute hover:drop-shadow-[0_9px_20px_#4CDE96] top-[285px] h-[65px] w-[65px] bg-font1 rounded-full mx-auto items-center'>
            <img src={Dice} alt="dice-icon" className='h-7 mx-auto my-5' />
          </button>
        </div>
      }))
    </div>
  )
}

export default App
