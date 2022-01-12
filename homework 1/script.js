// let users = {}


// for(let i = 1; i <= 10; i++){
//     let n = prompt('enter your name');
//     let a = +prompt('enter your age');
    
//     users[i] = {
//         name: n,
//         age: a
//     }
// }


// for(const key in users){
//     console.log(`user: ${key}`);
//     for(const newKey in users[key]){
//         console.log(newKey == 'name' ? `your name is ${users[key][newKey]}` : `you are ${users[key][newKey]}`);


//     }
// }
//  console.log(users);



let users ={}

for(let i = 1; i <= 10; i++){
    let name = prompt('enter your name');
    let age = +prompt('enter your age');

    users[i] = {
        name: name,
        age: age
    }
}
for(const key in users){
    console.log(`user: ${key}`);
    for(const newKey in users[key]){
        console.log(newKey == 'name' ? `your name is ${users[key][newKey]}` : `you are ${users[key][newKey]}`);
    }

}
console.log(users);



