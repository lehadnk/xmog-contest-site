import React, { Component } from 'react';
import './App.css';
import Participant from './Participant';
import Client from './Client';

class ParticipantsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            participants: [],
        };
        this.client = new Client();
    }

    componentDidMount() {
        this.client.get('/participants')
            .then(response => {
                this.setState({
                    participants: response.entity.data
                });
            }, error => {
                console.log(error);
            });
    }

    render() {
        return (
                <div>
                    {this.state.participants.map(participant => (
                        <Participant participant={participant} key={participant.id} />
                    ))}
                </div>
        );
    }
}

export default ParticipantsList;
