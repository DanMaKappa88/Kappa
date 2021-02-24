// Adott a következő 2 dimenziós tömb, amely egy játékhoz tartozó "térképet" ír le.
// pl.: a [0,2] koordinátán a Joe nevű játékos van 998 életerőponttal 

const array = [
    [null, null, { name: "Joe", hp: 998 }, null, null],
    [{ name: "Steve", hp: 200 }, null, null, null, { name: "Alex", hp: 260 }],
    [null, null, null, null, null],
    [null, { name: "Fred", hp: 1000 }, null, null, null],
    [null, null, { name: "Bill", hp: 111 }, null, null]
];

// 1, Mennyi életerőpontja van összesen a játékosoknak?
let eletero=0;
for(let i=0;i<array.length;i++){
    for(j=0;j<array[i].length;j++){
        if(array[i][j]!==null){
            eletero+=array[i][j].hp;
        }

    }
}
console.log(eletero);
// 2, Készítsetek egy egy dimenziós tömböt, amely a játékosokat tartalmazza, majd rendezzétek tetszőleges algoitmussal csökkenő sorrendbe
let segedT=[];
for(let i=0;i<array.length;i++){
    for(j=0;j<array[i].length;j++){
        if(array[i][j]!==null){
            segedT.push(array[i][j]);
        }

    }
}
console.log(segedT);

//1 2 3 4 5 2
for(let i=1;i<segedT.length;i++){
    let seged81=segedT[i];
    let j8=i-1;
    console.log(seged81);
    while(j8>=0 && segedT[j8].hp>seged81.hp){
        segedT[j8+1]=segedT[j8];
        j8--;
    }
    segedT[j8+1]=seged81;
}
console.log(segedT);
// 3, Telepítsétek a readline-sync​ NPM csomagot


// Készítsetek egy egyszerű menüt
var readlineSync = require('readline-sync');
 
// Wait for user's response.

var leutottKurzor = readlineSync.question('Aggyá egy egyöst vagy kettist Tesa oszt magic? ha nem More akkor q.t kalimpalj be');
console.log('A valasztasod Dzsukhel' + leutottKurzor + '!');
console.log('DIkk azt hitted , na jó szivatlak bástya , ujra')
while(leutottKurzor!=='q'){ 
    leutottKurzor = readlineSync.question('Aggyá egy egyöst vagy kettist Tesa oszt magic? ha nem More akkor q.t kalimpalj be');
console.log('A valasztasod Dzsukhel  ' + leutottKurzor + ' !');

if(leutottKurzor==='1'){
    for(let i=0;i<segedT.length;i++){
        console.log(segedT[i].hp);
    }
}
if(leutottKurzor==='2'){
    for(let i=0;i<segedT.length;i++){
        console.log(segedT[i].name);
    }
}

if(leutottKurzor==='q'){
    console.log('Oh, ' + leutottKurzor +'!');
    console.log('baktalo');
}
}
// 1-es gombra az életerőpontok íródnak ki
// 2-es gombra a rendezett játékos lista
// q billentyű leütésére befejeződik a program