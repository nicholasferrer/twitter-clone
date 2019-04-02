const Tweet = require('../models/Tweet');

module.exports = {
    //listar
    async index(req, res){
        const tweets = await Tweet.find({}).sort('-createAt');

        return res.json(tweets);
    },
    //salvar no db
    async store(req, res){
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
};