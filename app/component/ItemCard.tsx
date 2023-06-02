export default function ItemCard() {
    const color: string = "#DBFFE6";

    return (
        <div className="box-border flex justify-between items-center w-[934px] h-[50px] rounded border-solid border-1 border-[#EEF3F8] bg-white px-5">
            <div className="font-inter h-[19px] font-semibold text-[#2E3849] leading-[19px] text-4 mr-[91px]">
                Banana
            </div>
            <div className="font-inter h-[15px] font-semibold text-[#728197] leading-[15px] text-3">
                Expiry Date
            </div>
            <div className="w-[100px] h-6 bg-[#DBFFE6]">
                Expired
            </div>
        </div>
    )
}
