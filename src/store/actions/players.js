import {fetchTeamSquad} from "../../api/squad";

export function loadPlayers(id) {
    return function (dispatch) {
        return fetchTeamSquad(id).then(squad => {
            dispatch({type: 'selected-team', value: squad});
        });
    };
}