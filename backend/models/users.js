const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

const USER_TABLE = 'flora.users';

// Create

// Create User, Do Checks
const createNewUser = async (username, password) => {
    
    // Need Username
    if (!username) {
        return {
            success: false,
            message: 'Username Required'
        }
    }

    // Need Password
    if (!password) {
        return {
            success: false,
            message: 'Password Required'
        }
    }

    // Hash Password with Bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const query = knex(USER_TABLE).insert({ username, password: hashedPassword });
    result = await query;
    result['success'] = true;
    return result;

};

// Requests

// Authenticate User
const authenticateUser = async (username, password) => {
    const users = await findByUserName(username);
    if (users.length === 0) {
        return null; }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        delete user.password;
        return user;
    }
    return null;
};

// Find All Users 
const getUsers = async () => {
    const query = knex(USER_TABLE);
    const result = await query;
    return result;
};

// Find All Unprivated Users 
const getUsersNonPrivate = async () => {
    const query = knex(USER_TABLE).where({ privateTag: 0 });
    const result = await query;
    return result;
};

// Find All Registered Users
const getUsersRegistered = async () => {
    const query = knex(USER_TABLE).where({ registerTag: 1 });
    const result = await query;
    return result;
};

// Find Specified User
const findByUserName = async (username) => {
    const query = knex(USER_TABLE).where({ username });
    const result = await query;
    return result;
};

// Updates

// Update Username
const updateUserName = async (username, new_username) => {
    const query = knex(USER_TABLE).where({username}).update({username: new_username});
    const result = await query;
    return result;
};

// Update Password
const updatePassword = async (username, new_password) => {
    
    // Need Username
    if (!username) {
        return {
            success: false,
            message: 'Username Required'
        }
    }

    // Need Password
    if (!new_password) {
        return {
            success: false,
            message: 'Password Required'
        }
    }

    // Hash Password with Bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_password, salt);

    const query = knex(USER_TABLE).where({username}).update({password: hashedPassword});
    result = await query;
    result['success'] = true;
    return result;
    
};

// Update Picture
const updatePicture = async (username, new_picture) => {
    const query = knex(USER_TABLE).where({username}).update({imagePath: new_picture});
    const result = await query;
    return result;
};

// Delete

// Delete User With Username
const deleteUserName = async (username) => {
    const query = knex(USER_TABLE).where({username}).del();
    const result = await query;
    return result;
};

module.exports = {
    createNewUser,
    authenticateUser,
    findByUserName,
    getUsers,
    getUsersNonPrivate,
    updatePassword,
    updateUserName,
    updatePicture,
    deleteUserName
};
