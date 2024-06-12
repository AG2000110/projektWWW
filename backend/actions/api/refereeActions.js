const Referee = require('../../db/models/referee')

class RefereeActions {
    
    async getAllReferees(req, res){
        let doc;
        try {
            doc = await Referee.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message});
        }
        res.status(200).json(doc);
    }
    

    async getReferee(req, res){
        const id = req.params.id;
        const referee = await Referee.findOne({ _id: id});
        res.status(200).json(referee)
    }

    async saveReferee(req, res){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const class2 = req.body.class2;
        const license = req.body.license;

        let referees;

        try{
            referees = new Referee({ firstName, lastName, class2, license });
            await referees.save()
        } catch (err){
            return res.status(422).json({ messege: err.message })
        }
        res.status(201).json(referees)
       }

    async updateReferee(req, res){
        const id = req.params.id;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const class2 = req.body.class2;
        const license = req.body.license;

        const referees = await Referee.findOne({ _id: id })
        referees.firstName = firstName;
        referees.lastName = lastName;
        referees.class2 = class2;
        referees.license = license

        await referees.save();

        res.status(201).json(referees) 
    }

    async deleteReferee(req, res){
        const id = req.params.id;
        await Referee.deleteOne({_id: id }); 
        res.sendStatus(204) 
    }


    

}

module.exports = new RefereeActions();

