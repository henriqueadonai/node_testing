const cats =[
    {name: 'Mojo', months:84 },
    {name:'Mao-Mao', months:34},
    {name: 'Waffles', months:4},
    {name:'Pickles', months:6},
    {name:'Hulk', months:5},
    {name:'Spider', months:10},

]

var kittens =[];

//Poor Loop
for (var i=0; i< cats.length; i++){
    if(cats[i].months <7){
        kittens.push(cats[i].name);
    }
}

console.log("POOR loop");
console.log(kittens);

const isKitten = cats => cats.months < 7;
const getName = cats =>cats.name;
 
 //var kittens_good = [];
//  for (var i=0; i< cats.length; i++){
//      if (isKitten(cats[i])){
//          kittens_good.push(getName(cats[i]));
//          //kittens_good.push(cats[i].name);
//      }
//  }
console.log();
console.log("Cats Filter age bigger than 80");
cats.filter(function (cat){
    if(cat.months>80){
        console.log(cat.name);
    }
})

console.log();
console.log("Cats Names:");
cats.filter(isKitten).map(function(b){console.log(b.name)});


const kittens_good = cats.filter(isKitten).map(getName);

console.log();
 console.log("Good Loop:");
 console.log(kittens_good);

//isKitten = "henrique";
//console.dir(isKitten);