'use client'
import Image from 'next/image'
import Fridge from './component/Fridge'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function Home() {
  return (
    <Provider store={store}>
      <Fridge />
    </Provider>

  )
}