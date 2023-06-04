'use client';
import { ThreeDots } from "react-loader-spinner";

export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center font-inter">
            <div className="mt-[102.5px]">
                <ThreeDots
                    height="3px"
                    width="65px"
                    radius="9"
                    color="#00598D"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
            </div>
            <div className="font-inter w-[150px] h-[19px] font-semibold text-[16px] leading-[19px] text-[#003A59] tracking-[-0.03em] mt-[22.5px]">
                Loading fridge items
            </div>
        </div>
    )
}
