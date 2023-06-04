'use client'
import Image from 'next/image'
import TheFridge from './page/TheFridge'
import { Provider } from 'react-redux'
import  store  from './redux/store'

export default function Home() {
  return (
      <Provider store={store}>
           <TheFridge  />
       </Provider>

  )
}