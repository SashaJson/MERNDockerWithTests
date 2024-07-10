const bcrypt = require('bcrypt');
const jose = require('jose');

const JWT_SECRET = 'fc1a526efee3fd787cc140e429ebb17ed83e53cec7dcb532930159e1d8a8e2ba';

const secret = new TextEncoder().encode(JWT_SECRET);

const password = 'qwerty12';
let hashedPassword;
let token;

const register = async function () {
    hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
};

const login = async function () {

    const isPasswordValid = await bcrypt.compare(password, 'qwerty');
    console.log(isPasswordValid);

    token = await new jose.SignJWT({ userId: 'asap12345' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secret);

    console.log(token);
};

register().then(() => login());

