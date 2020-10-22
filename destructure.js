
// Destructure, Object, array, destructure complex object
const person = {name: 'Jack willam', age: 17, job: 'facebooking', gfName: 'Ema watson', address: 'New york', phone: 46765, friends: ['Tom hancks','Tom cruise', 'Tom yarn']}

//destructure old system
// const gfName = person.gfName;
// const phone = person.phone;

// destructure ES-6
const { phone, gfName, address } = person;

console.log(gfName,phone,address);
console.log(gfName,phone,address);


//destructure complex object
const complexObject = {
    name: 'jarin',
    info:{
        address: 'london',
        houseNum: 34,
    }
}

const {address} = complexObject.info;
console.log(address);

// array destructure
const friends = ["hasan", "jamal", "kamal", "abir", "salman", "atiq", "aqib"]
const [first, second, ...remaining = friends;

console.log(first, second, remaining)