const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const playerActions = require('../actions/api/playerActions')
const clubActions = require('../actions/api/clubActions')
const refereeActions = require('../actions/api/refereeActions')
const User = require('../db/models/userAdmin');
const UserAdmin = require('../db/models/userAdmin');
const UserReferee = require('../db/models/userReferee');
const UserClub = require('../db/models/userClub');

//pobieranie zawodnikow
router.get('/players', playerActions.getAllPlayers)
router.get('/clubs', clubActions.getAllClubs)
router.get('/referees', refereeActions.getAllReferees)

//pobieranie jednego zawodnika
router.get('/players/:id', playerActions.getPlayer)
router.get('/clubs/:id', clubActions.getClub)
router.get('/referees/:id', refereeActions.getReferee)

//zapisywanie zawodnika
router.post('/players', playerActions.savePlayer)
router.post('/clubs', clubActions.saveClub)
router.post('/referees', refereeActions.saveReferee)

//edytowanie zawodnika
router.put('/players/:id', playerActions.updatePlayer)
router.put('/clubs/:id', clubActions.updateClub)
router.put('/referees/:id', refereeActions.updateReferee)

//usuwanie zawodnika
router.delete('/players/:id', playerActions.deletePlayer)
router.delete('/clubs/:id', clubActions.deleteClub)
router.delete('/referees/:id', refereeActions.deleteReferee)

router.post('/register', async (req,res)=>{
    try{
        const {userName, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser;

        switch(role) {
            case 'admin':
                newUser = new UserAdmin({ userName, password: hashedPassword });
                break;
            case 'sedzia':
                newUser = new UserReferee({ userName, password: hashedPassword });
                break;
            case 'klub':
                newUser = new UserClub({ userName, password: hashedPassword });
                break;
            default:
                return res.status(400).send('Invalid role');
        }

        await newUser.save();
        res.status(201).send('User register successful');
    }
    catch(error){
        res.status(500).send('Error registering user')
    }
})


router.post('/login', async (req,res)=>{
    try{
        const {userName, password} = req.body;
        const userAdmin = await UserAdmin.findOne({ userName });

        if(userAdmin && (await bcrypt.compare(password, userAdmin.password))){
            res.cookie('userToken', userAdmin._id.toString(), {httpOnly: true});
            res.status(200).json({ success: true });
        }else{
            res.status(200).json({ success: false });
        }
     }
    catch(error){
        res.status(500).send('Error registering user')
    }
})

router.post('/referee', async (req,res)=>{
    try{
        const {userName, password} = req.body;
        const userReferee = await UserReferee.findOne({ userName });

        if(userReferee && (await bcrypt.compare(password, userReferee.password))){
            res.cookie('userToken', userReferee._id.toString(), {httpOnly: true});
            res.status(200).json({ success: true });
        }else{
            res.status(200).json({ success: false });
        }
     }
    catch(error){
        res.status(500).send('Error registering user')
    }
})

router.post('/club', async (req,res)=>{
    try{
        const {userName, password} = req.body;
        const userClub = await UserClub.findOne({ userName });

        if(userClub && (await bcrypt.compare(password, userClub.password))){
            res.cookie('userToken', userClub._id.toString(), {httpOnly: true});
            res.status(200).json({ success: true });
        }else{
            res.status(200).json({ success: false });
        }
     }
    catch(error){
        res.status(500).send('Error registering user')
    }
})


router.post('/logout', (req, res)=>{
    res.clearCookie('userToken');
    res.status(200).send('Logout seccessful');
});



module.exports = router;