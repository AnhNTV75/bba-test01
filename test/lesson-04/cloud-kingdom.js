// khai bao bien
const playerName = "Mario";
let currentLives = 3;

//khai bao hang so coins & level 
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

// tinh toan
const totalCoins = coinsLevel1 + coinsLevel2 + coinsLevel3;
const averageCoins = totalCoins/3;
const remainingCoins = totalCoins%3;

//In
console.log("Tong coin: ", totalCoins);
console.log("Gia tri trung binh:",averageCoins);
console.log("So coin du khi chia cho 3:", remainingCoins);
