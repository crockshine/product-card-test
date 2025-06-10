import styles from './CardList.module.css'
import { useEffect, useState} from "react";
import type {IProductCard} from "../../types/product-card.interface.ts";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import {mockProducts} from "../../mocks/product-cards.mock.ts";
import {useCurrency} from "../../hooks/useCurrency.ts";

const CardList = () => {
    const [products, setProducts] = useState<IProductCard[]>([])
    const currency = useCurrency()

    useEffect(() => {
        setProducts(mockProducts)
        currency?.fetchCourse()
    }, [currency])

    if (!currency) return null

    return (
        <div className={styles.cardList}>
            {
                products.map(product =>
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        currency={product.currency}
                        imageUrl={product.imageUrl}
                        origin={product.origin}
                        price={product.price}
                        title={product.title}
                        course={currency.currencyCourse[product.currency]}
                    />
                )
            }
        </div>
    );
};

export default CardList;