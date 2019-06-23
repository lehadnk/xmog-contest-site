import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantsList from './ParticipantsList';
import VotersList from './VotersList';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    handleChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Участники конкурса трансмогов - Июнь 2019</h1>
                </header>
                <div>
                    <AppBar position="static">
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab label="Участники" />
                            {/*<Tab label="Проголосовавшие" />*/}
                        </Tabs>
                    </AppBar>
                    {this.state.value === 0 && <TabContainer><ParticipantsList /></TabContainer>}
                    {/*{this.state.value === 1 && <TabContainer><VotersList /></TabContainer>}*/}
                </div>
            </div>
        );
    }
}

export default App;
