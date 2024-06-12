const Club = require('../../db/models/club')

class ClubActions {
    
    async getAllClubs(req, res){
        let doc;
        try {
            doc = await Club.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message});
        }
        res.status(200).json(doc);
    }
    

    async getClub(req, res){
        const id = req.params.id;
        const club = await Club.findOne({ _id: id});
        res.status(200).json(club)
    }

    async saveClub(req, res){
        const name = req.body.name;
        const adress = req.body.adress;
        const city = req.body.city;

        let clubs;

        try{
            clubs = new Club({ name, city, adress });
            await clubs.save()
        } catch (err){
            return res.status(422).json({ messege: err.message })
        }
        res.status(201).json(clubs)
       }

    async updateClub(req, res){
        const id = req.params.id;
        const name = req.body.name;
        const adress = req.body.adress;
        const city = req.body.city;

        const clubs = await Club.findOne({ _id: id })
        clubs.name = req.body.name;
        clubs.adress = req.body.adress;
        clubs.city = req.body.city;

        await clubs.save();

        res.status(201).json(clubs) 
    }

    async deleteClub(req, res){
        const id = req.params.id;
        await Club.deleteOne({_id: id }); 
        res.sendStatus(204) 
    }


    

}

module.exports = new ClubActions();

