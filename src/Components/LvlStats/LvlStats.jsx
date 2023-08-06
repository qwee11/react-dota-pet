import React, { useEffect, useState } from 'react';
import styles from './LvlStats.module.css'
import { countStatsWithLevel } from '../../utils/countStatsWithLvl';

const LvlStats = ({ hero }) => {

    const [sliderValue, setSliderValue] = useState(1);
    const [heroStats, setHeroStats] = useState([]);

    const changeSliderValue = (value) => {
        setSliderValue(value)
    }

    useEffect(() => {
        setHeroStats(countStatsWithLevel(hero, sliderValue))
    }, [sliderValue])

    return (
        <div>
            <div className={styles.lvlSlider}>
                <input onInput={e => changeSliderValue(e.target.value)} min="1" max="30" value={sliderValue} type="range" className={styles.slider} />
            </div>
            <div className={styles.withLvlHeader}>
                <h1>stats with level: {sliderValue}</h1>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Damage:</td>
                        <td>{heroStats.damage}</td>
                    </tr>
                    <tr>
                        <td>Health:</td>
                        <td>{heroStats.health}</td>
                    </tr>
                    <tr>
                        <td>Mana:</td>
                        <td>{heroStats.mana}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LvlStats;
