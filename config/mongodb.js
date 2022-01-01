const { MongoClient } = require('mongodb');

const url = 'mongodb://user1_cruds1:12345678@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('koneksi mongodb berhasil');
    } catch (e) {
        console.log(e);
    }
})();

const db = client.db('cruds-v1');

module.exports = db;