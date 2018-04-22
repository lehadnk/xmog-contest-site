import React, { Component } from 'react';
import './App.css';
import Voter from './Voter';
import Client from './Client';

class VotersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voters: [],
        };
        this.client = new Client();
    }

    componentDidMount() {
        this.client.get('/voters')
            .then(response => {
                this.setState({
                    voters: response.entity.data
                });
            }, error => {
                console.log(error);
            });
    }

    render() {
        return (
                <div>
                    {this.state.voters.map(voter => (
                        <Voter voter={voter} key={voter.discord_id} />
                    ))}
                </div>
        );
    }
}

export default VotersList;
