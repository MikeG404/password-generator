import './App.css'
import ChecboxesList from './components/ChecboxesList'
import PasswordInput from './components/PasswordInput'
import Slider from './components/Slider'
import Strength from './components/Strength'

function App() {

  return (
    <main className='h-screen flex flex-col justify-center items-center gap-4 p-6 bg-gradient-black'>
      <h1 className='preset-4 text-gray-600-2'>Password Generator</h1>
      {/* INPUT PASSWORD */}
      <PasswordInput />
      <section className='w-full flex flex-col p-4 gap-8 bg-gray-800-2'>
        <Slider />
        <ChecboxesList />
        <Strength />
      </section>
    </main>
  )
}

export default App
