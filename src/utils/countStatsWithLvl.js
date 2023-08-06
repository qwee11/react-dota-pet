export const countStatsWithLevel = (hero, lvl) => {
    return {
        health: countHealth(hero, lvl),
        damage: countDmg(hero, lvl),
        mana: countMana(hero, lvl)
    }
}

const countHealth = (hero, lvl) => {
    return ((Math.floor(hero.str_gain * (lvl - 1))) + hero.base_str) * 22 + hero.base_health;
}

const countMana = (hero, lvl) => {
    return ((Math.round(hero.int_gain * (lvl - 1))) + hero.base_int) * 12 + hero.base_mana;
}

const getMainAttrValues = (hero) => {
    let resObj;
    switch (hero.primary_attr) {
        case 'str':
            resObj = { mainAttrGain: hero.str_gain, mainAttrValue: hero.base_str }
            break;
        case 'agi':
            resObj = { mainAttrGain: hero.agi_gain, mainAttrValue: hero.base_agi }
            break;
        case 'int':
            resObj = { mainAttrGain: hero.int_gain, mainAttrValue: hero.base_int }
            break;

        default:
            return false;
    }
    return resObj;
}

const countDmg = (hero, lvl) => {
    if (hero.primary_attr === 'all') {
        const countUniDmg = Math.floor((hero.base_str + hero.base_int + hero.base_agi + (hero.str_gain + hero.int_gain + hero.agi_gain) * (lvl - 1)) * 0.7);
        return `${countUniDmg + hero.base_attack_min}-${countUniDmg + hero.base_attack_max}`
    }
    const attrValues = getMainAttrValues(hero)
    const mainAttrWithLvl = ((Math.floor(attrValues.mainAttrGain * (lvl - 1))) + attrValues.mainAttrValue)
    return `${mainAttrWithLvl + hero.base_attack_min}-${mainAttrWithLvl + hero.base_attack_max}`
}