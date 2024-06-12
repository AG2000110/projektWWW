module.exports = {
    port: process.env.PORT || 3001,
    databasePlayers: process.env.DATABASE || 'mongodb://127.0.0.1:27017/players',
    databaseClubs: process.env.DATABASE || 'mongodb://127.0.0.1:27017/clubs',
    databaseReferees: process.env.DATABASE || 'mongodb://127.0.0.1:27017/referees',
    databaseUserAdmin: process.env.DATABASE || 'mongodb://127.0.0.1:27017/user_admin',
    databaseUserReferee: process.env.DATABASE || 'mongodb://127.0.0.1:27017/user_referee',
    databaseUserClub: process.env.DATABASE || 'mongodb://127.0.0.1:27017/user_club'
}