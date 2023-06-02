
export default function AddItemForm() {
  return (
    <div className='w-screen flex justify-center pt-70px' >
      <div className="card rounded-sm border-#E3E9F1 flex-col p-10 bg-white w-934px h-170px">
        <div className='w-full flex justify-between gap-[22px]' >
          <div className='w-290px'>
            <label htmlFor="Item_Name" className="block text-sm font-medium leading-6 text-gray-900">
              🍉 Item Name
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                required
                type="text"
                name="Item_Name"
                id="Item_Name"
                className="block w-[290px] h-10 rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div className='w-290px' >
            <label htmlFor="Expiry_Date" className="block text-sm font-medium leading-6 text-gray-900">
              ⏰ Expiry Date
            </label>
            <div className="relative rounded-md shadow-sm">

              <input
                required
                type="date"
                name="Expiry_Date"
                id="Expiry_Date"
                className="block w-[290px] h-10 rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className='w-230px flex flex-col pt-[24px]'>
            <button className="btn w-230px h-10 relative rounded-md shadow-sm bg-primary text-white
            font-inter font-bold text-[13px] text-sm/[24px] tracking-normal flex justify-items-center pl-[65px] pt-2"> ADD TO FRIDGE</button>
          </div>

        </div>
        <div className='font-inter font-[#728197] font-normal text-3 tracking-normal leading-[15px] pt-3 capitalize'>
          ⚠️ We don&apos;t want more than one piece of the same food in our fridge.
        </div>
      </div>

    </div>
  )
}
