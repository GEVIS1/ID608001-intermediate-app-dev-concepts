import React from 'react'
import Clock from './Clock'
import Owner from './Owner'
import afghanHoundImg from '../img/afghan-hound.jpg'

const dog = {
  name: 'Bingo',
  breed: 'Afghan Hound',
  img: afghanHoundImg
}

function formatDog(dog) {
  return `Woof woof, my name is ${dog.name} & my breed is an ${dog.breed}`
}

function getGreeting(dog) {
  if (dog) {
    return <h1>{formatDog(dog)}</h1>
  }
  return <h1>Uh...who are you?</h1>
}

function App() {
  return (
    <div className='container'>
      <Owner />
      {getGreeting()}
      <img src={dog.img} alt='afghan hound' width='300' />
      <Clock />
    </div>
  )
}

export default App