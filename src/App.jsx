import Dice from './assets/icon-dice.svg'

function App() {

  return (
    <div className="max-w-xl mx-auto h-screen px-5 relative">
      <div className='h-[320px] flex justify-center flex-col rounded-xl bg-bg2 px-5 items-center border my-40'>
        <h4 className='text-xs py-5 text-font2'>ADVICE #117</h4>
        <h2 className='font-extrabold text-2xl text-center text-font1'>"It's is easy to sit up and take notice, whats's diffuclt is getting up and taking action."</h2>
        <div className='flex gap-2 justify-center items-center my-5'>
          <span className='h-1 w-36 bg-bg1 rounded-xl'></span>
          <span className='font-extrabold text-xl rounded-xl'>l</span>
          <span className='font-extrabold text-xl rounded-xl'>l</span>
          <span className='h-1 w-36 bg-bg1 rounded-xl'></span>
        </div>
        <button className='z-30 absolute hover:drop-shadow-[0_9px_20px_#4CDE96] top-[285px] h-[65px] w-[65px] bg-font1 rounded-full mx-auto items-center'>
          <img src={Dice} alt="dice-icon" className='h-7 mx-auto my-5' />
        </button>
      </div>

    </div>
  )
}

export default App
