const Boom = require('@hapi/boom');

const dewormingRepository = require('./deworming.repository');
const animalRepository = require('../animal/animal.repository');

const getAllDeworming = async (userId, filters) => {
  return await dewormingRepository.findAllDewormings(userId, filters);
}

const getDeworming = async (userId, dewormingId) => {
  const deworming = await dewormingRepository.findOne(userId, dewormingId);
  if(!deworming?.id) throw Boom.notFound('Deworming does not exist');
  return deworming;
}

const createDeworming = async (userId, dewormingData) => {
  const animal = await animalRepository.findOne(userId, dewormingData.animalId);
  if(!animal?.id) throw Boom.notFound('Animal does not exist or does not belong to the user');

  const deworming = {
    dewormer: dewormingData.dewormer,
    description: dewormingData.description || null,
    animalId: dewormingData.animalId,
    registeredAt: dewormingData.registeredAt || new Date().toISOString().split('T')[0],
  }

  const newdeworming = await dewormingRepository.create(deworming);
  if(!newdeworming?.id) throw Boom.badRequest('Something went wrong creating the deworming');
  return newdeworming;
}

const updateDeworming = async (userId, dewormingId, dewormingData) => {
  const deworming = await dewormingRepository.findOne(userId, dewormingId);
  if(!deworming?.id) throw Boom.conflict('deworming does not exists');

  const formattedDewormingData = {
    dewormer: dewormingData.dewormer,
    ...(dewormingData.description && { description: dewormingData.description }),
  }

  const [ updatedRows, [ updatedDeworming ]] = await dewormingRepository.update(dewormingId, formattedDewormingData);
  if(!updatedDeworming?.id) throw Boom.badRequest('Something went wrong creating the deworming');
  return updatedDeworming;
}

const deleteDeworming = async (userId, dewormingId) => {
  const deworming = await dewormingRepository.findOne(userId, dewormingId);
  if(!deworming?.id) throw Boom.conflict('deworming does not exists');

  return await dewormingRepository.destroy(dewormingId);
}

module.exports = {
  getAllDeworming,
  getDeworming,
  createDeworming,
  updateDeworming,
  deleteDeworming,
}
