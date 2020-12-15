import {getTeams} from "../../api/teams";

export function loadTeams() {
    return function (dispatch) {
        return getTeams().then((teams) => {
            dispatch({type: 'teams', value: teams});
        })
    };
}
