import './App.css'
import PasswordInput from './components/PasswordInput'
import Slider from './components/Slider'
import Strength from './components/Strength'

function App() {

  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <h1 className='preset-4'>Password Generator</h1>
      {/* INPUT PASSWORD */}
      <PasswordInput />
      <section>
        {/* <Slider /> */}
        {/* <Strength /> */}

      </section>
    </main>
  )
}

export default App
