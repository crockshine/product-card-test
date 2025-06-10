export interface IProductCard {
    id: number;
    title: string;
    origin: TOrigin;
    price: number;
    currency: TCurrency;
    imageUrl: string;
}

// страна может храниться так
// type TOrigin = 'Россия' | 'Турция' | 'Китай'

// или же так, в этом случае потребуется Record
export type TOrigin = 'RU' | 'TR' | 'CN' | 'NONE'

export type TCurrency = 'RUB' | 'USD' | 'EUR'