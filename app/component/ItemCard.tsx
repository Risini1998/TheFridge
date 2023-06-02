'use client';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, IconButton } from '@mui/material';

interface ItemCardProps{
    item: string
    expireDate: string
}

export default function ItemCard(props:ItemCardProps) {
    let color: string;
    let status:string;

    const currentDate= new Date().getTime;
    const expiredDate= new Date(props.expireDate).getTime;

    var daysToExpire = 3;

    return (
        <div className="box-border flex justify-between items-center w-[934px] h-[50px] rounded border-solid border-1 border-[#EEF3F8] bg-white pl-5 pr-4">
            <div className='flex justify-between items-center'>
                <div className="font-inter h-[19px] font-semibold text-[#2E3849] leading-[19px] text-[16px] mr-[91px]">
                    {props.item}
                </div>
                <div className="font-inter h-[15px] font-semibold text-[#728197] leading-[15px] text-[12px]">
                    Expiry date — {props.expireDate}
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className={`w-[100px] h-6 bg-[${color}]  rounded-[22px] flex justify-center items-center mr-[17px] leading-[15px] text-[12px] font-semibold`}>
                    {status}
                </div>
                <div>
                    <IconButton aria-label="delete" size="small" >
                        <DeleteOutlineIcon className="font-black"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
