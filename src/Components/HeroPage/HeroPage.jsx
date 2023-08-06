import React, { useEffect, useState } from 'react';
import styles from './HeroPage.module.css'
import { NavLink, useParams } from 'react-router-dom';
import { getHeroes } from '../../utils/getHeroes';
import { stealHeroimg } from '../../utils/stealHeroImg';
import Loader from '../UI/Loader/Loader';
import { countAverageStats } from '../../utils/countAverageStats';
import LvlStats from '../LvlStats/LvlStats';

const HeroPage = () => {
    const [isLoading, setIsLoading] = useState(false)


    const id = useParams().id;

    const findHero = (heroes, id) => {
        // console.log(hero[121].id) >> 136
        let res;
        for (let i = 0; i < heroes.length; i++) {
            if (+id === +heroes[i].id) {
                res = heroes[i]
            }
        }
        return res
    }

    const [hero, setHero] = useState([]);
    const [averageStats, setAverageStats] = useState({})

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await getHeroes();
            setHero(findHero(response, id));
            const averageHeroStats = await countAverageStats(id)
            setAverageStats(averageHeroStats)
            setIsLoading(false);
        })()
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader />

                : <div className={styles.heroPage} >
                    <NavLink to={'http://localhost:3000/hero-list'} >
                    <div className={styles.backButton}>
                        <i className={styles.arrow}></i>
                    </div>
                    </NavLink>
                    <div className={styles.flexContainer}>
                        <div className={styles.heroImg}>
                            <img draggable={false} src={stealHeroimg(hero.localized_name)} alt={hero.localized_name + ' img'} />
                        </div>
                        <div className={styles.averageStats}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>AVERAGE STATS</th>
                                        <th>AVERAGE values</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Kills:</td>
                                        <td>{averageStats.kills}</td>
                                    </tr>
                                    <tr>
                                        <td>assists:</td>
                                        <td>{averageStats.assists}</td>
                                    </tr>
                                    <tr>
                                        <td>death:</td>
                                        <td>{averageStats.death}</td>
                                    </tr>
                                    <tr>
                                        <td>win rate:</td>
                                        <td>{averageStats.wins}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.baseStats}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>base STATS</th>
                                        <th>values</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>name:</td>
                                        <td>{hero.localized_name}</td>
                                    </tr>
                                    <tr>
                                        <td>strength:</td>
                                        <td>{hero.base_str} + {hero.str_gain}</td>
                                    </tr>
                                    <tr>
                                        <td>intelligence:</td>
                                        <td>{hero.base_int} + {hero.int_gain}</td>
                                    </tr>
                                    <tr>
                                        <td>Agility:</td>
                                        <td>{hero.base_agi} + {hero.agi_gain}</td>
                                    </tr>
                                    <tr>
                                        <td>move speed:</td>
                                        <td>{hero.move_speed}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.statsWithLvl}>
                        <LvlStats hero={hero} />
                        <div className={styles.roles}>
                            {hero.roles?.map(role => {
                                return <p key={role} >{role}</p>
                            })}
                        </div>
                    </div>
                </div>
            }

        </div >
    );
}

export default HeroPage;
