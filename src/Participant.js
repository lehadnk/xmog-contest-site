import React, { Component } from 'react';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Client from './Client';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

class Participant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voters: [],
        };
        this.client = new Client();
    }

    expand(event, expanded) {
        if (expanded) {
            return;
        }

        this.client.get('/participant/'+this.props.participant.id)
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
            <Card>
                <div className="img-container">
                    <a href={this.props.participant.image_url} target="_blank">
                        <img className="participant-img" src={this.props.participant.image_url} title={this.props.participant.name} />
                    </a>
                </div>

                <Typography gutterBottom variant="headline" component="h2">
                    {this.props.participant.name}
                </Typography>

                <CardContent>
                    {/*<ExpansionPanel onChange={() => {this.expand()}} >*/}
                        {/*<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>*/}
                            {/*<Typography>Проголосовали</Typography>*/}
                        {/*</ExpansionPanelSummary>*/}
                        {/*<ExpansionPanelDetails>*/}

                            {/*/!*<List dense={true}>*!/*/}
                                {/*/!*{this.state.voters.map(voter => (*!/*/}
                                    {/*/!*<ListItem>*!/*/}
                                        {/*/!*<ListItemText primary={voter.discord_name} />*!/*/}
                                    {/*/!*</ListItem>*!/*/}
                                {/*/!*))}*!/*/}
                            {/*/!*</List>*!/*/}
                        {/*</ExpansionPanelDetails>*/}
                    {/*</ExpansionPanel>*/}
                </CardContent>
            </Card>
        );
    }
}

export default Participant;