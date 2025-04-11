// Interfaces are just like structs.

interface User {
    name: string,
    age: number,
    gender: string
};

function check(user: User) {
    if(user.age > 18) {
        console.log("Welcome to site")
    }
    else{
        console.log("You are under-age")
    }
}

check({name: "Shubham",
    age: 18,
    gender: "male"
})