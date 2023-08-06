import React, { useEffect, useState } from 'react';
import styles from './HeroList.module.css'
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../UI/Loader/Loader';
import Header from '../Header/Header'
import { getHeroes } from '../../utils/getHeroes';
import { filterHeroes } from '../../utils/filterHeroes';

const HeroList = () => {
    const [filterInput, setFilterInput] = useState('')
    const [attrFilter, setAttrFilter] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const response = await getHeroes();
            setHeroes(response)
            setIsLoading(false)
        })()
    }, [])

    return (
        <>
            <Header filterInput={filterInput} setFilterInput={setFilterInput} attrFilter={attrFilter} setAttrFilter={setAttrFilter} />
            <div className={styles.heroPage}>
                {isLoading
                    ? <Loader />

                    : filterHeroes(heroes, filterInput, attrFilter).map(hero => <HeroCard hero={hero} key={hero.id} />)

                }
            </div>
        </>
    );
}

export default HeroList;
