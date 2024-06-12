import React from 'react';
import Referee from './referee/referee'
import NewReferee from './referee/newReferee';
import Modal from 'react-modal';
import EditReferee from './editReferee/editReferee';
import axios from 'axios';

class Referees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            referees: [],
            showEditModal: false,
            editReferee: {},
            selectedReferee: {},
            role: localStorage.getItem('userRole')
    };
}

    componentDidMount(){
        this.fetchReferees();
    }

    async fetchReferees() {
            const res = await axios.get('http://localhost:3001/api/referees');
            const referees = res.data;

            this.setState({ referees })
            console.log(res);
        }

    async deleteReferee(id){
        console.log('Usuwanie sędziego: ', id)
        const referees = [...this.state.referees].filter(referee => referee._id !== id);
        await axios.delete('http://localhost:3001/api/referees/' + id)
        this.setState({ referees });
    }

    async addReferee( referee ){
        const referees = [...this.state.referees];

        const res = await axios.post('http://localhost:3001/api/referees', referee)
        const newReferee = res.data;

        referees.push(newReferee);
        this.setState({ referees });
    }

    async editReferee( referee ) {
        await axios.put('http://localhost:3001/api/referees/' + referee._id, referee);
        const referees = [...this.state.referees];
        const index = referees.findIndex(x => x._id === referee._id)
        if (index >= 0){
            referees[index] = referee
            this.setState({ referees });
        }
        this.toggleModal();
    }

    toggleModal() {
        this.setState({showEditModal: !this.state.showEditModal })
    }

    editRefereeHandler(referee){
        this.toggleModal();
        this.setState({editReferee: referee});
        this.setState({selectedReferee: referee});
    }


    render() {
        

        return (
            <div>
                <h2>Sędziowie:</h2>

                <Modal
                    isOpen = {this.state.showEditModal}
                    contentLabel = "Edytuj sędziego">
                        <EditReferee
                        firstName={this.state.editReferee.firstName}
                        lastName={this.state.editReferee.lastName}
                        class2={this.state.editReferee.class2}
                        license={this.state.editReferee.license}
                        id={this.state.editReferee._id}
                        referee={this.state.selectedReferee}
                        onEdit={referee => this.editReferee(referee)} />
                        <button onClick={() =>this.toggleModal()}>Anuluj</button>
                </Modal>

                <table>
                    <thead>
                        <tr>
                            <th>Numer</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Klasa</th>
                            <th>Nr licencji</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.referees.map((referee, index) => (
                        <Referee 
                            key={referee._id}
                            firstName={referee.firstName}
                            lastName = {referee.lastName}
                            class2 = {referee.class2}
                            license = {referee.license}
                            id = {referee._id}
                            index = {index}
                            onEdit = {(referee) => this.editRefereeHandler(referee)}
                            onDelete = {(id) => this.deleteReferee(id)}
                            role = {this.state.role} />
                    ))}


                    </tbody>
                </table>
                <NewReferee onAdd = {( referee ) => this.addReferee( referee )} role = {this.state.role}/>
            </div>
        );
    }
}

export default Referees;
