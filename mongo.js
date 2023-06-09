const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://grigor:YGJEQR41dHSN77y5@cluster0.zuo9uoe.mongodb.net/test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);
    } catch (error) {
        return res.json({ message: error })
    };

    client.close();
    res.json(newProduct);
}

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);

    let products;

    try {
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
    } catch (error) {
        return res.json({ message: error })
    };

    client.close();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
