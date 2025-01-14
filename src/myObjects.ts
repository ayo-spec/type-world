// const User = {
//     name: 'Ayomide',
//     email: 'ayo@gmail.com',
//     isActive: true,
// }

// function createUser({name, isPaid}: {name: string, isPaid: boolean}) {
//     console.log(`User ${name} is ${isPaid ? 'paid' : 'not paid'}`);
// }

// let newUser = {name: 'Ayomide', isPaid: true, email:'ayo@gmail.com'};

// createUser( newUser )


// function createCourse():{name: string, price: number} {
//     return {name: 'Introduction to TypeScript', price: 345};
// }



// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }


// function createUser(user: User): User {
//     return {name: user.name, email: user.email, isActive: user.isActive};
// }


// type User = {
//     readonly _id: string;
//     name: string;
//     email: string;
//     isActive: boolean;
//     creditCardDetails: number
// }


// let myUser: User = {
//     _id: '1234',
//     name: 'Ayomide',
//     email: 'ayo@gmail.com', 
//     isActive: false, 
//     creditCardDetails: 1234567890
// }



type cardNumber = {
    cradnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// myUser.email = 'ayo@gmail.com';
// myUser._id = 'asa'
