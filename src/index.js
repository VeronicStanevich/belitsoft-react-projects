import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import {Squad} from './components/squad';
import './teams.css';

const App = () => {

    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    React.useEffect(() => {
        getTeams();
    }, []);


    const fetchTeams = () => {
        const headers = new Headers();
        headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');

        return fetch('https://api.football-data.org/v2/teams', {
            method: 'GET',
            headers: headers
        })
            .then(res => res.json())
    }

    function getTeams() {
        fetchTeams()
            .then(responseJSON => {
                setTeams(responseJSON.teams);
            })
            .catch(alert);
    }

    if (selectedTeam) {
        return(
            <div>
                <button onClick={() => {
                    setSelectedTeam(null);
                }}>Reset team selection
                </button>
                <Squad team={selectedTeam}/>
            </div>);
    }

    return (
        <div className="teams">
            {teams.map((team) => (
                <div key={team.id} className="team__card" onClick={(event) => {
                    event.preventDefault();
                    setSelectedTeam(team);
                }}>
                    <a className="team__link" href="#">
                        <img className="team__logo" alt={team.name} src={team.crestUrl}/>
                        <p>{team.name}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
