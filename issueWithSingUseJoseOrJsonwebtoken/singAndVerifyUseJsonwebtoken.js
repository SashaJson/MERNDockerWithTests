const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'fc1a526efee3fd787cc140e429ebb17ed83e53cec7dcb532930159e1d8a8e2ba';
const password = 'qwerty12';
let hashedPassword;
let token;

const register = async function () {
    try {
        hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
    } catch (err) {
        console.error('Error hashing password:', err);
    }
};

const login = async function () {
    try {
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        console.log(isPasswordValid);

        if (isPasswordValid) {
            token = jwt.sign(
                { userId: 'asap12345' },
                JWT_SECRET,
                { algorithm: 'HS256', expiresIn: '1h' }
            );
            console.log(token);
        } else {
            console.log('Invalid password');
        }
    } catch (err) {
        console.error('Error during login:', err);
    }
};

register().then(() => login());
