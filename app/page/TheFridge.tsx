import Image from 'next/image'
import Title from '../component/Common/Title'
import AddItemForm from '../component/AddItemForm'
import ItemCard from '../component/ItemCard'

export default function TheFridge() {
  return (
    <div className="flex">
      <div className=" bg-white w-screen h-[353px]" >
      </div>
      <div className="h-screen  w-screen justify-center absolute pt-90px flex-col" >
        <Title />
        <AddItemForm />
        <div className='mt-5 flex justify-center'>
          <ItemCard />
        </div>
      </div>
    </div>
  )
}
