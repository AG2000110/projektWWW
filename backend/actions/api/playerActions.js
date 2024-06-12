const Player = require('../../db/models/player')

class PlayerActions {
    
    async getAllPlayers(req, res){
        let doc;
        try {
            doc = await Player.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message});
        }
        res.status(200).json(doc);
    }
    

    async getPlayer(req, res){
        const id = req.params.id;
        const player = await Player.findOne({ _id: id});
        res.status(200).json(player)
    }

    async savePlayer(req, res){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const club = req.body.club;
        const license = req.body.license;

        let players;

        try{
            players = new Player({ firstName, lastName, club, license });
            await players.save()
        } catch (err){
            return res.status(422).json({ messege: err.message })
        }
        res.status(201).json(players)
       }

    async updatePlayer(req, res){
        const id = req.params.id;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const club = req.body.club;
        const license = req.body.license;

        const players = await Player.findOne({ _id: id })
        players.firstName = firstName;
        players.lastName = lastName;
        players.club = club;
        players.license = license

        await players.save();

        res.status(201).json(players) 
    }

    async deletePlayer(req, res){
        const id = req.params.id;
        await Player.deleteOne({_id: id }); 
        res.sendStatus(204) 
    }


    

}

module.exports = new PlayerActions();

