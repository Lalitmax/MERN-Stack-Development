const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

// Model View Controller (mvc)

exports.createNewProduct= (req, res) => {
    try {
        console.log(req.body);
        products.push(req.body);
        // Send back the created product or a meaningful response
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.readProducts=(req, res) => {
    res.json(products);
}

exports.readProductById=(req, res) => {
    try {
        const id = +req.params.id;
        const product = products.find(p => p.id === id);
        console.log(product, id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.replaceProduct= (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        products.splice(productIndex, 1, { ...req.body, id: id });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.updateProduct=(req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        const product = products[productIndex];
        products.splice(productIndex, 1, { ...product, ...req.body });

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteProduct= (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        const product = products[productIndex];
        products.splice(productIndex, 1);

        res.status(200).json({"deleted ":  product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}