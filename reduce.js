const numbers =[10,20,30,40,50,60];
const reducer = (accumulator,item)=>{
    return accumulator + item;
}

const initialValue =0;
const total = numbers.reduce(reducer,initialValue);

console.log('Inicial Value = ', initialValue);
console.log("the sum is: ", total);

const divisionbySIX =[6,12,18,25,35,45,60];
const multiplesOfSixInfo = numArray => numArray.reduce(
    (acc,item) => {
        (item %6 === 0)
            ? acc.totalMultiplesOfSix +=1
            : acc.totalNonMultiplesOfSix +=1;
            acc.nome = "Look Values";
        return acc;    
    },{totalMultiplesOfSix:0, totalNonMultiplesOfSix:0 }
);

console.log(multiplesOfSixInfo(divisionbySIX));


const numbersMap = [10,20,30,40,50];
const numbersMapReducer = [10,20,30,40,50];
const squaresOfNumbers = numArray => numbers.map(item=>item*item);
console.log("MAP");
console.log(squaresOfNumbers(numbersMapReducer))

console.log("REDUCER MAP");
const squaresOfNumbersReducer = numArray => numArray.reduce(
    (acc,item)=>{
        acc.push(item * item);
        return acc;
    },[]
);

console.log(squaresOfNumbersReducer(numbersMapReducer));


var nodes = [
    { 
        name: 'java',
        followers: [
            { name: 'ABC', email: 'abc@abc.com' },
            { name: 'IJK', email: 'ijk@ijk.com' },
            { name: 'LMN', email: 'lmn@lmn.com' }
        ]
    },
    { 
        name: 'javascript',
        followers: [
            { name: 'ABC', email: 'abc@abc.com' },
            { name: 'IJK', email: 'ijk@ijk.com' },
            { name: 'XYZ', email: 'xyz@xyz.com' }
        ]
    },
    { 
        name: 'programming',
        followers: [
            { name: 'XYZ', email: 'abc@abc.com' },
            { name: 'IJK', email: 'ijk@ijk.com' },
            { name: 'PQR' }
        ]
    }
];

const getSetOfFollowerEmails = (nodes) => {
  return Object.keys(nodes.reduce(function(store, node) {
    return node.followers.reduce(function(store, follower) {
      follower.email && (store[follower.email] = true);
      return store;
    }, store);
  }, {}));
};

console.log(getSetOfFollowerEmails(nodes))





const followerReducer = (acc, follower) => {
  const email = follower.email;
  if(email){
    acc.push(email);
  }
  return acc;
};
const emails =[];
//console.log(nodes.followers.reduce(followerReducer,emails));
console.log(nodes[0].followers.reduce(followerReducer,emails));


const nodeReducer = (acc, node) => {
  acc.push(node.followers.reduce(followerReducer, []));
  return acc;
};

const getSetOfFollowerEmailsRE = (nodes) => {
  return (nodes.reduce(nodeReducer, []));
};

getSetOfFollowerEmailsRE(nodes);