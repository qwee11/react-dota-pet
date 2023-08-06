export const filterHeroes = (heroes, filterInput, attr) => {
    const filteredWithAttrHeroes = filterHeroesByAttr(heroes, attr);
    return filterHeroesByName(filteredWithAttrHeroes, filterInput)
}

const filterHeroesByName = (heroes, filterInput) => {
    if (filterInput === '') {
        return heroes
    }

    return heroes.filter(hero => hero.localized_name.toLowerCase().includes(filterInput.toLowerCase()))
}

const filterHeroesByAttr = (heroes, attr) => {
    switch (attr) {
        case 1:
            return heroes.filter(hero => hero.primary_attr === 'str');
        case 2:
            return heroes.filter(hero => hero.primary_attr === 'agi');
        case 3:
            return heroes.filter(hero => hero.primary_attr === 'int');
        case 4:
            return heroes.filter(hero => hero.primary_attr === 'all');
        default:
            return heroes
    }
}