import React from 'react';
import Club from './club/club'
import NewClub from './club/newClub.js';
import Modal from 'react-modal';
import EditClub from './editClub/editClub.js';
import axios from 'axios';

class Clubs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clubs: [],
            showEditModal: false,
            editClub: {},
            selectedClub: {},
            role: localStorage.getItem('userRole')
    };
}

    componentDidMount(){
        this.fetchClubs();
    }

    async fetchClubs() {
            const res = await axios.get('http://localhost:3001/api/clubs');
            const clubs = res.data;

            this.setState({ clubs })
            console.log(res);
        }

    async deleteClub(id){
        console.log('Usuwanie klubu: ', id)
        const clubs = [...this.state.clubs].filter(club => club._id !== id);

        await axios.delete('http://localhost:3001/api/clubs/' + id)
        this.setState({ clubs });
    }

    async addClub( club ){
        const clubs = [...this.state.clubs];

        const res = await axios.post('http://localhost:3001/api/clubs', club);
        const newClub = res.data;

        clubs.push(newClub);
        this.setState({ clubs });
    }

    async editClub( club ) {

        await axios.put('http://localhost:3001/api/clubs/' + club._id, club);

        const clubs = [...this.state.clubs];
        const index = clubs.findIndex(x => x._id === club._id)
        if (index >= 0){
            clubs[index] = club
            this.setState({ clubs });
        }
        this.toggleModal();
    }

    toggleModal() {
        this.setState({showEditModal: !this.state.showEditModal })
    }

    editClubHandler(club){
        this.toggleModal();
        this.setState({editClub: club});
        this.setState({selectedClub: club});
    }


    render() {
        

        return (
            <div>
                <h2>Kluby:</h2>

                <Modal
                    isOpen = {this.state.showEditModal}
                    contentLabel = "Edytuj klub">
                        <EditClub
                        name={this.state.editClub.name}
                        city={this.state.editClub.city}
                        adress={this.state.editClub.adress}
                        id={this.state.editClub._id}
                        club={this.state.selectedClub}
                        onEdit={club => this.editClub(club)} />
                        <button onClick={() =>this.toggleModal()}>Anuluj</button>
                </Modal>
                

                <table>
                    <thead>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa</th>
                            <th>Miasto</th>
                            <th>Adres</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.clubs.map((club, index) => (
                        <Club 
                            key={club._id}
                            name={club.name}
                            city = {club.city}
                            adress = {club.adress}
                            id = {club._id}
                            index = {index}
                            onEdit = {(club) => this.editClubHandler(club)}
                            onDelete = {(id) => this.deleteClub(id)}
                            role = {this.state.role}/>
                    ))}


                    </tbody>
                </table>
                <NewClub onAdd = {( club ) => this.addClub( club )} role = {this.state.role}/>
                
            </div>
        );
    }
}

export default Clubs;
