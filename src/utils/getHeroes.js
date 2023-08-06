export const getHeroes = async () => {
    try {
        const response = await fetch("https://api.opendota.com/api/heroStats");
        if(!response.ok) {
            throw('error')
        }
        console.log(response);
        const body = await response.json()
        return body
    } catch (e) {
        navigateToErrPage();
    }

}

const navigateToErrPage = () => {
    window.location.href = 'http://localhost:3000/error-page'
}