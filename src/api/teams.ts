import {ITeam} from "../interfaces";

const fetchTeams = () => {
    const headers = new Headers();
    headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');

    return fetch('https://api.football-data.org/v2/teams', {
        method: 'GET',
        headers: headers
    })
        .then(res => res.json())
}

export function getTeams(): Promise<ITeam[]> {
    return fetchTeams()
        .then(responseJSON => responseJSON.teams)
        .catch(alert);
}
