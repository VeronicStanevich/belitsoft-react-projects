import {IPlayer} from "../../interfaces";

enum ActionType {
    SET_SELECTED_TEAM = 'selected-team'
}

interface ISetActionType {
    type: ActionType.SET_SELECTED_TEAM,
    value: IPlayer[]
}

export function selectedTeamReducer(players: IPlayer[] = [], action: ISetActionType) {
    switch (action.type) {
        case ActionType.SET_SELECTED_TEAM:
            return action.value;
        default:
            return players;
    }
}

