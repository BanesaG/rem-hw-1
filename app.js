const age = prompt('input your age');

/* write a conditional that alerts 'enter' if the user is 21 or older 
and alerts 'leave' otherwise */
//const age = prompt('What is our age?')

let age = prompt('insert age');
age = 21; 

if(age >= 21) {
  alert('Enter');
}
else alert('Leave');


const nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];

/* use a loop and conditional to alert all the names that begin with 's' */
const startsWithS = nameList.filter((name)=> name.startsWith("S"));
console.log(startsWithS);


const userList = [
  {
    name: 'sally',
    age: 20
  },
  {
    name: 'sarah',
    age: 42
  },
  {
    name: 'betsy',
    age: 16
  },
  {
    name: 'sam',
    age: 55
  },
  {
    name: 'aretha',
    age: 32
  },
  {
    name: 'sun',
    age: 3
  }
]


/* use a loop and conditional to alert all the names of users who are over 21 */

const ageList = ['20', '42', '16', '55', '32', '3'];

let over21 = ageList.filter((age)=> age.over21(">21"));
console.log(over21);
