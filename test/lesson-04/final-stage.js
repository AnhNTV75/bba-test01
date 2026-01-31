function findPairsDivisibleBy17(){
    let count = 0;
    const pairs = [];

    for(let i = 1; i <=100; i++){
        for(let j = i; j <= 100; j++){
            if((i+j) % 17 === 0){
                pairs.push(`(${i}, ${j})`);
                count++;
            }
        }
    }
    console.log("Cac cap so tim duoc:");
    console.log(pairs.join(", "));
    console.log(`\n Tong cong co ${count} cap so thoa man dieu kien`);
}
findPairsDivisibleBy17();