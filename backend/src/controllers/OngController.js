const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs); 
    },

    async create(request, response){
        const { name, email, whatzapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            whatzapp,
            email,
            city,
            uf,
        })
        return response.json({id});
    }
};