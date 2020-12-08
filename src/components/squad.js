import React, {useState} from "react";

const fetchTeam = (id) => {
    const headers = new Headers();
    headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');

    return fetch(`https://api.football-data.org/v2/teams/${id}`, {
        method: 'GET',
        headers: headers
    })
        .then(res => res.json())
}

export const Squad = (props) => {
    const [players, setPlayers] = useState([]);

    React.useEffect(() => {
        fetchTeam(props.team.id).then(team => {
            setPlayers(team.squad)
        });
    }, []);

    return (
        players.map(player => (
            <div key={player.id}>
                <p>{player.name}</p>
            </div>
        ))
    );
}
