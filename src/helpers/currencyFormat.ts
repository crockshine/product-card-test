import type {TCurrency} from "../types/product-card.interface.ts";

export const currencyFormat=  (value: number, course: number, currency: TCurrency) => {
    const priceInRubles = value / 100
    const handledPrice = priceInRubles * course

    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(handledPrice);
}
