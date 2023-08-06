import React from 'react';
import styles from './HeroCard.module.css'
import { NavLink } from 'react-router-dom'

const HeroCard = ({ hero }) => {

    return (
            <div className={styles.heroCard}>
                <NavLink to={`hero/${hero.id}`} >
                    <img src={`https://api.opendota.com${hero.img}`} className={styles.heroCard__img} alt={hero.localized_name + ' img'} />
                    <p className={styles.heroCard__name} >{hero.localized_name}</p>
                </NavLink>
            </div>
    );
}

export default HeroCard;
