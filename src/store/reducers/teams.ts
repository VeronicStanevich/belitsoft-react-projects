import {ITeam} from "../../interfaces";

enum ActionType {
    SET = 'teams'
}

interface ISetTeams {
    type: ActionType,
    value: ITeam[]
}

export function teamsReducer(state = [], action: ISetTeams) {
    switch (action.type) {
        case ActionType.SET:
            return action.value;
        default:
            return state;
    }
}

