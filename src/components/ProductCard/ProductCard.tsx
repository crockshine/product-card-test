import styles from './ProductCard.module.css'
import type {IProductCard} from "../../types/product-card.interface.ts";
import CountryBadge from "../CountryBadge/CountryBadge.tsx";
import {currencyFormat} from "../../helpers/currencyFormat.ts";

interface IProductCardProps extends IProductCard {
    course: number;
}
const ProductCard = (props:IProductCardProps) => {

    return (
        <div className={styles.productCardWrapper}>
            <img
                src={props.imageUrl}
                className={styles.image}
                alt="Картинка товара"
            />
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{props.title}</h2>
                <CountryBadge origin={props.origin}/>
                <h3 className={styles.price}>
                    {
                        currencyFormat(props.price, props.course ,props.currency)
                    }
                </h3>
            </div>
        </div>
    );
};

export default ProductCard;