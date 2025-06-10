import {createContext, type ReactNode,  useState} from "react";
import type {TCurrency} from "../types/product-card.interface.ts";
import axios from "axios";

type TCurrencyToRubble = Record<TCurrency, number>;

interface ContextType {
    currencyCourse: TCurrencyToRubble ;
    fetchCourse: () => Promise<void>;
}

const CurrencyContext = createContext<ContextType | undefined>(undefined);

interface CurrencyProviderProps {
    children: ReactNode;
}

export const CurrencyProvider = ({children}: CurrencyProviderProps) => {
    const [currencyCourse, setCurrencyCourse] = useState<TCurrencyToRubble>({
        RUB: 1,
        USD: 1,
        EUR: 1
    });

    // Получить курс
    const fetchCourse = async () => {
        try{
            const {data} = await axios.get('https://api.exchangerate-api.com/v4/latest/RUB')
            const rates: TCurrencyToRubble = {
                RUB: 1,
                USD: data.rates.USD,
                EUR: data.rates.EUR
            };
            setCurrencyCourse(rates);
        } catch (error) {
            console.error(error);
        }
    }

    // Результат - контекст
    return (
        <CurrencyContext.Provider value={{currencyCourse, fetchCourse}}>
            {children}
        </CurrencyContext.Provider>
);
};

export default CurrencyContext;