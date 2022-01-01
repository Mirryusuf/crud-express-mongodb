const Product = require('./model');

const index = async (req, res) => {
    const {search} = req.query;
    try {
        if (search) {
            const result = await Product.find({ nama: { $regex: `^${search}` } });
            res.send(result);
        }
        const result = await Product.find();
        res.send(result);
    } catch (e) {
        res.send(e);
    }
}

const view = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Product.findOne({_id: id})
        res.send(result);
    } catch (e) {
        res.send(e);
    }
}

const store = async (req, res) => {
    const { nama, stock, harga, status } = req.body;
    try {
        const result = await Product.create({ nama, stock, harga, status })
        res.send(result);
    } catch (e) {
        res.send(e);
    }
}

// const update = async (req, res) => {
//     const { nama, stock, harga, status, id } = req.body;
//     try {
//         const result = await Product.updateOne({ "_id" : id }, { $set: { "nama" : nama, "stock" : stock, "harga" : harga, "status" : status } })
//         res.send(result);
//     } catch (e) {
//         res.send(e);
//     }
// }

const update = async (req, res) => {
    const { nama, stock, harga, status } = req.body;
    const { id } = req.params;
    try {
        const result = await Product.updateOne({ "_id" : id }, { $set: { "nama" : nama, "stock" : stock, "harga" : harga, "status" : status } })
        res.send(result);
    } catch (e) {
        res.send(e);
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Product.deleteOne({ "_id" : id })
        res.send(result);
    } catch (e) {
        res.send(e);
    }
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy
}