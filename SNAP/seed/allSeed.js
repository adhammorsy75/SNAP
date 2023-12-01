const db = require('../db/index')

const cartSeed = require('./cartSeed')
const userSeed = require('./userSeed')
const gamesSeed = require('./gamesSeed')

async function deleteCollections() {
    try {
      const collections = Object.keys(db.collections);
  
      for (const collectionName of collections) {
        await db.collections[collectionName].deleteMany({});
        console.log(`Deleted all documents from collection: ${collectionName}`);
      }
  
      console.log('All collections are empty.');
    } catch (error) {
      console.error('Error deleting collections:', error);
    }
  }

async function seed() {
    await deleteCollections()

  
    await gamesSeedSeed()
 
    await cartSeed()
    await userSeed()
    db.close()
}

seed()

