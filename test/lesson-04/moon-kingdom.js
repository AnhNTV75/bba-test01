//--- Bai_1: createCharacters ---

const characters = [
    {name: "Mario", level: 10, health: 500},
    {name: "Luigi", level: 8, health: 400},
    {name: "Bowser", level: 20, health: 1500},
    {name: "Peach", level: 5, health: 1200}
];
// Map
const characterPowerUp = characters.map(char => {
    return{
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health *3
    };
});
//Loc phan tu co health >1000
const possibleWinners = characterPowerUp.filter(char => char.health>1000);
// In
console.log("Mang PowerUp:", characterPowerUp);
console.log("Danh sach Possible Winners:", possibleWinners);

// --- Bai_2: printLeaderboard ---
const players = [
    {name: "Mario", score: 1000},
    {name: "Luigi", score: 900},
    {name: "Peach", score: 850},
    {name: "Yoshi", score: 800},
    {name: "Phong", score: 500}
];

function printLeaderboard(data){
    //Sort
    const sortedPlayers = data.sort((a, b) => b.score - a.score);
    console.log("---LEADERBOARD---");
    sortedPlayers.forEach((player, index) => {
        let rank = index + 1;
        let medal ="";

        // Them huy chuong cho vi tri 1, 2, 3
        if(rank === 1) medal = "🥇";
        else if (rank === 2) medal = "🥈";
        else if (rank === 3) medal = "🥉";
        console.log(`${medal}${rank}.${player.name} - ${player.score}pts`)
    });
}

printLeaderboard(players);