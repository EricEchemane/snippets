/**
 * Logic for encryption_decryption of a user's sensitive data
 * 1. encrypt users password using argon2
 * 2. store encrypted password in database
 * 3. to encryot sensitive data, use their actual password to encrypt the data
 * 4. to decrypt sensitive data, use their actual password to decrypt the data
 */