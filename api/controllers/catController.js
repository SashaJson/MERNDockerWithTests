const Cat = require('../models/cat');

exports.createCat = async (req, res) => {
    const { name, age, breed } = req.body;
    const cat = new Cat({ name, age, breed });

    try {
        await cat.save();
        res.status(201).send(cat);
    } catch (error) {
        res.status(500).send('Error creating cat');
    }
};

exports.getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find();
        res.send(cats);
    } catch (error) {
        res.status(500).send('Error fetching cats');
    }
};

exports.getCatById = async (req, res) => {
    const { id } = req.params;

    try {
        const cat = await Cat.findById(id);

        if (!cat) {
            return res.status(404).send('Cat not found');
        }

        res.send(cat);
    } catch (error) {
        res.status(500).send('Error fetching cat');
    }
};

exports.updateCatById = async (req, res) => {
    const { id } = req.params;
    const { name, age, breed } = req.body;

    try {
        const cat = await Cat.findByIdAndUpdate(
            id,
            { name, age, breed },
            { new: true, runValidators: true }
        );

        if (!cat) {
            return res.status(404).send('Cat not found');
        }

        res.send(cat);
    } catch (error) {
        res.status(500).send('Error updating cat');
    }
};

exports.deleteCatById = async (req, res) => {
    const { id } = req.params;

    try {
        const cat = await Cat.findByIdAndDelete(id);

        if (!cat) {
            return res.status(404).send('Cat not found');
        }

        res.send('Cat deleted');
    } catch (error) {
        res.status(500).send('Error deleting cat');
    }
};