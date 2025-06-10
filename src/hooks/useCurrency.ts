import {useContext} from "react";
import CurrencyContext from "../context/currency.context.tsx";

export const useCurrency = () => useContext(CurrencyContext);
