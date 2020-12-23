import {fetchTeamSquad} from "../../api/squad";
import {Dispatch} from "react";

export function loadPlayers(id: number) {
    return function (dispatch: Dispatch<unknown>) {
        return fetchTeamSquad(String(id)).then(squad => {
            dispatch({type: 'selected-team', value: squad});
        });
    };
}