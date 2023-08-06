export async function countAverageStats(id) {
    const response = await fetch(`https://api.opendota.com/api/heroes/${id}/matches`);
    const body = await response.json();
    const kills = [];
    const assists = [];
    const death = [];
    let wins = 0;
    for (let i = 0; i < body.length; i++) {
        death.push(body[i].deaths);
        assists.push(body[i].assists);
        kills.push(body[i].kills);
        if (body[i].radiant_win && body[i].radiant) {
            wins += 1
        }
        if (!body[i].radiant_win && !body[i].radiant) {
            wins += 1
        }
    }

    return {
        kills: Math.round(kills.reduce((a, b) => a + b) / 100),
        death: Math.round(death.reduce((a, b) => a + b) / 100),
        assists: Math.round(assists.reduce((a, b) => a + b) / 100),
        wins: wins
    }
}
