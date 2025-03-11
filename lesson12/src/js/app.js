const user = {
    Vitaly: {
        name: 'Vitaly',
        age: 26,
        isAdmin: false,
        sayHello (name) {
            console.log(`Hello ${name}`);
            
        }
    },
    Sasha: {
        name: 'Sasha',
        age: 30,
        isAdmin: true,
    },
    Vika: {
        name: 'Vika',
        age: 21,
        isAdmin: false,
    },
    Billy: {
        name: 'Billy',
        age: 24,
        isAdmin: false,
    },
    Herrington: {
        name: 'Herrington',
        age: 26,
        isAdmin: false,
    }

}

console.log(user.Vitaly)
user.Vitaly.sayHello('Billy '+'Herrington')

let ordinaryUser = 0

for (const key in user) {
    if (!user[key].isAdmin) {
        ordinaryUser++;
    }
}
console.log(ordinaryUser);
