import React, { Component } from 'react';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Client from './Client';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class Voter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            participants: [],
        };
        this.client = new Client();
    }

    expand(event, expanded) {
        if (expanded) {
            return;
        }

        this.client.get('/voter/'+this.props.voter.discord_id)
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
            <ExpansionPanel onChange={() => {this.expand()}} >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{this.props.voter.discord_name} ({this.props.voter.votes})</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List dense={true}>
                        {this.state.participants.map(participant => (
                            <ListItem>
                                <ListItemText primary={participant.name} />
                            </ListItem>
                        ))}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default Voter;