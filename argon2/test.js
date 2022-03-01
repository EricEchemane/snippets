const argon2 = require('argon2');
const readline = require('readline');

const rl = require('../readline');
// read data from user
rl.question('Enter password: ', async (password) => {
    // hash data
    // using type: argon2.argon2id to automatically generate a random salt
    const hash = await argon2.hash(password, { type: argon2.argon2id });
    console.log(`hashed: ${hash}`);

    // verify hashed data
    const userPasswordFromDatabase = hash; // example from users table

    rl.question('Re-enter password: ', async (password) => {
        // let say `password` came from user input
        const correct = await argon2.verify(userPasswordFromDatabase, password);
        console.log(`correct: ${correct}`);
        process.exit(0);
    });
});




