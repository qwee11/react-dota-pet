import React from 'react';
import styles from './Header.module.css'
import str_icon from '../../images/str-icon.png'
import agi_icon from '../../images/agi-icon.png'
import int_icon from '../../images/int-icon.png'
import uni_icon from '../../images/uni-icon.png'

const Header = ({ filterInput, setFilterInput, attrFilter, setAttrFilter }) => {
    return (
        <div className={styles.header}>
            <div className={styles.atribute_filter}>
                <div className={styles.atribut_filter_icons}>

                    <img
                        onClick={() => attrFilter === 1 ? setAttrFilter(0) : setAttrFilter(1)}
                        draggable="false"
                        src={str_icon}
                        alt="str_icon"
                        className={attrFilter === 1 ? styles.active : styles.notActive}
                        />
                    <img
                        onClick={() => attrFilter === 2 ? setAttrFilter(0) : setAttrFilter(2)}
                        draggable="false"
                        src={agi_icon}
                        alt="agi_icon"
                        className={attrFilter === 2 ? styles.active : styles.notActive}
                        />

                    <img
                        onClick={() => attrFilter === 3 ? setAttrFilter(0) : setAttrFilter(3)}
                        draggable="false"
                        src={int_icon}
                        alt="int_icon"
                        className={attrFilter === 3 ? styles.active : styles.notActive}
                        />

                    <img
                        onClick={() => attrFilter === 4 ? setAttrFilter(0) : setAttrFilter(4)}
                        draggable="false"
                        src={uni_icon}
                        alt="uni_icon"
                        className={attrFilter === 4 ? styles.active : styles.notActive}
                    />
                </div>
            </div>
            <div className={styles.header_input}>
                <input value={filterInput} onChange={e => setFilterInput(e.target.value)} type="text" className={styles.search_input} />
            </div>
        </div>
    );
}

export default Header;
