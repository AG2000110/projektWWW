import React from 'react';
import Player from './player/player'
import NewPlayer from './player/newPlayer';
import Modal from 'react-modal';
import EditPlayer from './editPlayer/editPlayer';
import axios from 'axios';


class Players extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            players: [],
            showEditModal: false,
            editPlayer: {},
            selectedPlayer: {},
            role: localStorage.getItem('userRole')
    };
}

    componentDidMount(){
        this.fetchPlayers();
    }

    async fetchPlayers() {
            const res = await axios.get('http://localhost:3001/api/players');
            const players = res.data;

            this.setState({ players })
            console.log(res);
         }
    

    async deletePlayer(id){
        console.log(id);
        console.log('Usuwanie zawodnika: ', id);
        const players = [...this.state.players].filter(player => player._id !== id);

        await axios.delete('http://localhost:3001/api/players/' + id)
        this.setState({ players });
    }

    async addPlayer( player ){
        const players = [...this.state.players];
        
        const res = await axios.post('http://localhost:3001/api/players', player)
        const newPlayer = res.data;

        players.push(newPlayer);
        this.setState({ players });
    }

    async editPlayer( player ) {
        console.log(player);

        await axios.put('http://localhost:3001/api/players/' + player._id, player);

        const players = [...this.state.players];
        const index = players.findIndex(x => x._id === player._id)
        if (index >= 0){
            players[index] = player
            this.setState({ players });
        }
        this.toggleModal();
    }

    toggleModal() {
        this.setState({showEditModal: !this.state.showEditModal })
    }

    editPlayerHandler(player){
        this.toggleModal();
        this.setState({editPlayer: player});
        this.setState({selectedPlayer: player});
    }



    render() {
        

        return (
            <div>
                <h2>Zawodnicy:</h2>

                <Modal
                    isOpen = {this.state.showEditModal}
                    contentLabel = "Edytuj zawodnika">
                        <EditPlayer
                        firstName={this.state.editPlayer.firstName}
                        lastName={this.state.editPlayer.lastName}
                        club={this.state.editPlayer.club}
                        license={this.state.editPlayer.license}
                        id={this.state.editPlayer._id}
                        player={this.state.selectedPlayer}
                        onEdit={player => this.editPlayer(player)} />
                        <button onClick={() =>this.toggleModal()}>Anuluj</button>
                </Modal>

                <table>
                    <thead>
                        <tr>
                            <th>Numer</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Klub</th>
                            <th>Nr licencji</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.players.map((player, index) => (
                    <Player 
                        key={player._id}
                        firstName={player.firstName}
                        lastName = {player.lastName}
                        club = {player.club}
                        license = {player.license}
                        id = {player._id}
                        index = {index}
                        onEdit = {(player) => this.editPlayerHandler(player)}
                        onDelete = {(id) => this.deletePlayer(id)}
                        role = {this.state.role} 
                    />
                    ))}

                    </tbody>
                </table>
                <NewPlayer onAdd = {( player ) => this.addPlayer( player )} role = {this.state.role}/>

            </div>
        );
    }
}

export default Players;
