import styles from './CountryBadge.module.css'
import type {TOrigin} from "../../types/product-card.interface.ts";
import {originRecord} from "../../helpers/origin-record.helper.ts";

const flagToCountry = (origin: TOrigin) => {
    switch (origin) {
        case 'RU':
            return '🇷🇺'
        case 'CN':
            return '🇨🇳'
        case 'TR':
            return '🇹🇷'
        default:
            return '🏳️'
    }
}


const CountryBadge = ({origin}: {origin: TOrigin}) => {
    return (
        <div className={styles.badgeWrapper}>
            {flagToCountry(origin)}
            <span className={styles.countryName}>
                {
                    originRecord[origin]
                    }
            </span>
        </div>
    );
};

export default CountryBadge;