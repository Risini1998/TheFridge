'use client'
import Title from '../component/Title'
import AddItemForm from '../component/AddItemForm'
import ItemCard from '../component/ItemCard'
import LoadingSpinner from '../component/LoadingSpinner';
import { RootState, fetchItems } from '../redux/items/slice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ItemCardModel } from '../models/itemCardModel';


export default function TheFridge() {
  const items: ItemCardModel[] = useSelector((state: RootState) => state.items.items);
  const loading = useSelector((state: RootState) => state.items.itemsLoading);
  const noOfItems: number = items.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="flex">
      <div className=" bg-white w-screen h-[353px]" >
      </div>
      <div className="h-screen w-screen flex items-center absolute pt-90px flex-col" >
        <Title />
        <AddItemForm />
        <div className='mt-5 flex flex-col justify-center items-center w-[934px] '>
          {loading
            ? <LoadingSpinner />
            :
            <><div className='w-[108px] h-[17px] mb-4 text-[14px] self-end font-inter font-semibold leading-[17px] text-[#2E3849] text-right'>
              Total items — {noOfItems < 10 && noOfItems != 0 ? `0${noOfItems}` : `${noOfItems}`}
            </div>
              <div className='flex flex-col gap-2'>
                {items?.map((item) => <div key={item._id}>
                  <ItemCard _id={item._id} title={item.title} expiry={item.expiry} />
                </div>)
                }
                  {/* <ItemCard _id='2' title='{item.title}' expiry='2022/05/02' />  */}

              </div></>
          }
        </div>
      </div>
    </div>
  )
}
