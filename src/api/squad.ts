import {IPlayer} from "../interfaces";

export const fetchTeamSquad = (id: string): Promise<IPlayer[]> => {
    const headers = new Headers();
    headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');

    return fetch(`https://api.football-data.org/v2/teams/${id}`, {
        method: 'GET',
        headers: headers
    })
        .then(res => res.json())
        .then(({squad}) => squad);
}