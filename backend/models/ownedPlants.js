const knex = require('../database/knex');

const PLANT_TABLE = 'ownedPlants';

const createNewOwnedPlant = async (owner, name, privateTag, insideTag) => {
    const query = knex(PLANT_TABLE).insert({ owner:owner, name:name, privateTag:privateTag, insideTag:insideTag});
    console.log('Raw query for createNewOwnedPlant:', query.toString());
    const result = await query;
    console.log("HERE IDIOT: ");
    return result;
};

const getAllOwnedPlants = async () => {
    //console.log('0 HERE');
    const query = knex(PLANT_TABLE);
    //console.log('1 HERE');
    const result = await query;
    //console.log('2 HERE');
    return result;
};

const findOwnedPlantsByOwner = async (owner) => {
    const query = knex(PLANT_TABLE).where({ owner });
    const result = await query;
    return result;
};

const findOwnedPlantByName = async (name) => {
    const query = knex(PLANT_TABLE).where({ name });
    const result = await query;
    return result;
};

const findOwnedPlantById = async (id) => {
    const query = knex(PLANT_TABLE).where({ id });
    const result = await query;
    return result;
};

const getAllOwnedPlantsExcludePrivate = async () => {
    const query = knex(PLANT_TABLE).where({ privateTag: 0 });
    const result = await query;
    return result;
};

const findOwnedPlantsByOwnerExcludePrivate = async (owner) => {
    const query = knex(PLANT_TABLE).where({ owner, privateTag: 0 });
    const result = await query;
    return result;
};

const findOwnedPlantByNameExcludePrivate = async (name) => {
    const query = knex(PLANT_TABLE).where({ name, privateTag: 0 });
    const result = await query;
    return result;
};

const findOwnedPlantByIdExcludePrivate = async (id) => {
    const query = knex(PLANT_TABLE).where({ id, privateTag: 0 });
    const result = await query;
    return result;
};

const updateName = async (id, new_name) => {
    const query = knex(PLANT_TABLE).where({id}).update({name: new_name});
    const result = await query;
    return result;
};

const updatePrivacy = async (id, new_privacy) => {
    const query = knex(PLANT_TABLE).where({id}).update({privateTag: new_privacy});
    const result = await query;
    return result;
};

const updateInside = async (id, new_inside) => {
    const query = knex(PLANT_TABLE).where({id}).update({insideTag: new_inside});
    const result = await query;
    return result;
};

const updateLastWatered = async (id, new_last) => {
    const query = knex(PLANT_TABLE).where({id}).update({lastWatered: new_last});
    const result = await query;
    return result;
};

const updateCurrentTasks = async (id, new_tasks) => {
    const query = knex(PLANT_TABLE).where({id}).update({currentTasks: new_tasks});
    const result = await query;
    return result;
};

const updateSpecificPhoto = async (id, new_photo) => {
    const query = knex(PLANT_TABLE).where({id}).update({specificPhoto: new_photo});
    const result = await query;
    return result;
};

const deleteOwnedPlant = async (id) => {
    const query = knex(PLANT_TABLE).where({id}).del();
    const result = await query;
    return result;
};

module.exports = {
    createNewOwnedPlant,
    findOwnedPlantsByOwner,
    findOwnedPlantByName,
    findOwnedPlantById,
    getAllOwnedPlants,
    findOwnedPlantsByOwnerExcludePrivate,
    findOwnedPlantByNameExcludePrivate,
    findOwnedPlantByIdExcludePrivate,
    getAllOwnedPlantsExcludePrivate,
    updateName,
    updatePrivacy,
    updateInside,
    updateLastWatered,
    updateCurrentTasks,
    updateSpecificPhoto,
    deleteOwnedPlant
};