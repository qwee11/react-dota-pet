export const stealHeroimg = (heroName) => {
    if (!heroName) {
        return 'nothing'
    }
    const lowerCaseName = heroName.toLowerCase().replace('\'', '');
    if (lowerCaseName.split(' ').length > 1) {
        return `https://dota2.ru/img/heroes/${lowerCaseName.split(' ').join('_')}/${lowerCaseName.split(' ').join('_')}.png`
    }
    if (lowerCaseName.split('-').length > 1) {
        return `https://dota2.ru/img/heroes/${lowerCaseName.split('-').join('_')}/${lowerCaseName.split('-').join('_')}.png`
    }
    return `https://dota2.ru/img/heroes/${lowerCaseName}/${lowerCaseName}.png`
}