const { ObjectId } = require('bson');
const db = require('../../config/mongodb');

const index = (req, res) => {
    const {search} = req.query;
    if (search) {
        db.collection('products').find({ nama: { $regex: `^${search}` } })
        .toArray()
        .then(result => res.send(result))
        .catch(error => console.log(error));
    }
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => console.log(error));
}

const view = (req, res) => {
    const { id } = req.params;
    db.collection('products').findOne({_id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => console.log(error));
}

const store = (req, res) => {
    const { nama, stock, harga, status } = req.body;
    db.collection('products').insertOne({ nama, stock, harga, status })
    .then(result => res.send(result))
    .catch(error => console.log(error));
}

const update = (req, res) => {
    const { id } = req.params;
    const { nama, stock, harga, status } = req.body;
    db.collection('products').updateOne({ "_id" : ObjectId(id) }, { $set: { "nama" : nama, "stock" : stock, "harga" : harga, "status" : status } })
    .then(result => res.send(result))
    .catch(error => console.log(error));
}

const destroy = (req, res) => {
    const { id } = req.params;
    db.collection('products').deleteOne({ "_id" : ObjectId(id) })
    .then(result => res.send(result))
    .catch(error => console.log(error));
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy
}