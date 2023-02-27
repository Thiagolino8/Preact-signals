import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { computed, effect, signal, useSignal } from '@preact/signals-react'
import { Counter } from './components/Counter'

function App() {
  const [titleState, setTitleState] = useState('React useState Counter')
  const changeTitleState = (newValue: string) => setTitleState(newValue)
  const [countState, setCountState] = useState(0)
  const incrementState = () => setCountState((oldCountState) => oldCountState + 1)
  const doubleState = countState * 2
  useEffect(() => {
    if (countState > 10) setCountState(0)
  }, [countState])

  const titleSignal = signal('Preact Signal Counter')
  const changeTitleSignal = (newValue: string) => (titleSignal.value = newValue)
  const countSignal = useSignal(0)
  const incrementSignal = () => (countSignal.value += 1)
  const doubleSignal = computed(() => countSignal.value * 2)
  effect(() => {
    if (countSignal.value > 10) countSignal.value = 0
  })

  return (
    <div className='App'>
      <Counter
        count={countState}
        double={doubleState}
        increment={incrementState}
        title={titleState}
        changeTitle={changeTitleState}
      />
      <Counter
        count={countSignal}
        double={doubleSignal}
        increment={incrementSignal}
        title={titleSignal}
        changeTitle={changeTitleSignal}
      />
    </div>
  )
}

export default App
