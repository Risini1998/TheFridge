export interface ItemCardModel{
    _id?:string
    title: string
    expiry: string
}

export enum statusEnum{
    EXPIRED = 'Expired',
    EXPIRED_SOON = 'Expired soon',
    HEALTHY = 'Healthy'
}
