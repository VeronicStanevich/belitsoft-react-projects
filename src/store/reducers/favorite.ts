import {ITeam} from "../../interfaces";

enum ActionType {
    ADD = 'favorite/add',
    REMOVE = 'favorite/remove'
}

interface IAddTeamAction {
    type: ActionType.ADD,
    value: ITeam
}

interface IRemoveTeamAction {
    type: ActionType.REMOVE,
    value: number
}

type IFavoriteTeamReducer = IAddTeamAction | IRemoveTeamAction;

export function favoriteTeamsReducer(teams = [], action: IFavoriteTeamReducer) {
    switch (action.type) {
        case ActionType.ADD:
            if (teams.find(({id}) => id === action.value.id)) {
                return teams;
            }

            return [...teams, action.value];
        case ActionType.REMOVE:
            return teams.filter(({id}) => id !== action.value);
        default:
            return teams;
    }
}