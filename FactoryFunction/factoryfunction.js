//https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

const user = {
    userName: "Echo",
    avatar: "echo.png"
}
console.log(user.userName);

const key = 'avatar';

console.log(user[key]);


const myName = "Henrique";
const photo = "3x4";

const userNew = {
    myName,
    photo,
    setUserName(myName){
        this.myName = myName;
        return this;
    }
}


console.log(userNew.setUserName('Adonai').myName);

//Factory of Users
const createUser = ({ userName, avatar }) => ({
  userName,
  avatar,
  setUserName (userName) {
    this.userName = userName;
    return this;
  }
});


