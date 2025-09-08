import './App.css'
import PasswordInput from './components/PasswordInput'
import Slider from './components/Slider'
import Strength from './components/Strength'

function App() {

  return (
    <main className='h-screen flex flex-col justify-center items-center gap-4 p-6 '>
      <h1 className='preset-4'>Password Generator</h1>
      {/* INPUT PASSWORD */}
      <PasswordInput />
      <section className='w-full flex flex-col p-4 bg-gray-800-2'>
        <Slider />
        {/* <Strength /> */}

      </section>
    </main>
  )
}

export default App
