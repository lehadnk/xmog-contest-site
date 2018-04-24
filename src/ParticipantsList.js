import React, { Component } from 'react';
import './App.css';
import Participant from './Participant';
import Client from './Client';
import Grid from 'material-ui/Grid';

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
        let i, j, temparray, chunk = 3;
        let participants = [];
        for (i = 0, j = this.state.participants.length; i < j; i += chunk) {
            temparray = this.state.participants.slice(i, i + chunk);
            participants.push(temparray);
        }

        return (
            <div>
                {participants.map(chunk => (
                    <Grid container spacing={24}>
                    {chunk.map(participant => (
                        <Grid item xs={12} lg={4}>
                            <Participant participant={participant} key={participant.id} />
                        </Grid>
                    ))}
                    </Grid>
                ))}
            </div>
        );
    }
}

export default ParticipantsList;
