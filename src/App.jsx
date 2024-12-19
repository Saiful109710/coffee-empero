
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'
import Headers from './components/Headers'

function App() {
  const loadedCoffees = useLoaderData()

  const [coffees,setCoffees] = useState(loadedCoffees)

  return (
    <>
      <div>
      <Headers></Headers>
      </div>
      <h1>Total Coffee:{coffees.length}</h1>

    <div className='grid grid-cols-2 gap-5'>
    {
        coffees.map(coffee=><CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
    </div>
      
    </>
  )
}

export default App
