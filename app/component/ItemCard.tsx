'use client';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { ItemCardModel, statusEnum } from '../models/itemCardModel';
import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store';
import { deleteItem, fetchItems } from '../redux/items/slice';

export default function ItemCard(props: ItemCardModel) {
    const dispatch = useAppDispatch();

    const [status, setStatus] = useState<string>('');

    const monthsToExpire: number = (new Date(props.expiry).getTime() - new Date().getTime()) / (1000 * 3600 * 24 * 30);

    React.useEffect(() => {
        if (monthsToExpire <= 0) {
            setStatus(statusEnum.EXPIRED);
        } else if (monthsToExpire <= 1) {
            setStatus(statusEnum.EXPIRED_SOON);
        } else {
            setStatus(statusEnum.HEALTHY);
        }
    }, [])

    const handleClick = async (event: any) => {
        if (!props._id) return;
        dispatch(deleteItem(props._id));
        // dispatch(fetchItems());
    }

    return (
        <div className="box-border flex justify-between items-center w-[934px] h-[50px] rounded border-solid border-1 border-[#EEF3F8] bg-white pl-5 pr-4">
            <div className='flex justify-between items-center'>
                <div className="font-inter w-[80px] h-[19px] font-semibold text-[#2E3849] leading-[19px] text-[16px] mr-[91px]">
                    {props.title}
                </div>
                <div className="font-inter h-[15px] font-semibold text-[#728197] leading-[15px] text-[12px]">
                    Expiry date — {props.expiry}
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className={`w-[100px] h-6 rounded-[22px] flex justify-center items-center mr-[17px] leading-[15px] 
                    text-[12px] font-semibold ${monthsToExpire <= 0 ? 'expired' : monthsToExpire <= 1 ? 'expire-soon' : 'healthy'}`}>
                    {status}
                </div>
                <div>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        className={`${monthsToExpire <= 0 ? '@apply text-[#E63F3F]' : '@apply text-[#2E3849]'}`}
                        onClick={handleClick} >
                        <DeleteOutlineIcon className="font-black" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
