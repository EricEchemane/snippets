// npm i argon2
const argon2 = require('argon2');

// Hash data
try {
    const sensitiveData = 'my-secret-password';
    const hash = await argon2.hash(sensitiveData);
    // save the hash to database
} catch (err) {
    // handle error
}

// verify data
try {
    if (await argon2.verify("<big long hash>", "password")) {
        // password match
    } else {
        // password did not match
    }
} catch (err) {
    // internal failure
}