const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(req, res) {
        const ongs = await connection('ong').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        // desestruturação (também evita que o usuário preencha algo indesejado)
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return res.json({ id });
    }
};