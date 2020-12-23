import {getTeams} from "../../api/teams";
import {Dispatch} from "react";

export function loadTeams() {
    return function (dispatch: Dispatch<unknown>) {
        return getTeams().then((teams) => {
            dispatch({type: 'teams', value: teams});
        })
    };
}
