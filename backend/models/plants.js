const knex = require('knex');

const PLANT_TABLE = 'plants';
const USER_TABLE = 'user';

const createNewPlant = async (name, description, category, climate, imagePath) => {

    const query = knex(PLANT_TABLE).insert({ name, description, category, climate, imagePath });
    console.log('Raw query for createNewPlant:', query.toString());
    const result = await query;

    return result;
};

const getAllPlants = async () => {
    const query = knex(PLANT_TABLE);
    const result = await query;
    return result;
}

const findPlantByName = async (name) => {
    const query = knex(PLANT_TABLE).where({ name });
    const result = await query;
    return result;
}

const findPlantByCategory = async (category) => {
    const query = knex(PLANT_TABLE).where({ category });
    const result = await query;
    return result;
}

const findPlantByClimate = async (climate) => {
    const query = knex(PLANT_TABLE).where({ climate });
    const result = await query;
    return result;
}

const createUser = async (username, password, birthday, location, background ) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = knex(USER_TABLE).insert({ username, hashedPassword, birthday, location, FALSE, FALSE, FALSE, background });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;
    return result;
}

module.exports = {
    createNewPlant,
    findPlantByName,
    findPlantByCategory,
    findPlantByClimate,
    getAllPlants
};