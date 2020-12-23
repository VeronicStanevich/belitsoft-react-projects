import {IFavoritePlayer} from "../../interfaces";

enum ActionType {
    ADD = 'favorite-player/add',
    REMOVE = 'favorite-player/remove'
}

interface IFavoritePlayerActionDeleteAction {
    type: ActionType.REMOVE,
    value: number
}

interface IFavoritePlayerActionAddAction {
    type: ActionType.ADD,
    value: IFavoritePlayer
}

type IFavoritePlayerAction = IFavoritePlayerActionAddAction | IFavoritePlayerActionDeleteAction;

export function favoritePlayersReducer(players: IFavoritePlayer[] = [], action: IFavoritePlayerAction) {
    switch (action.type) {
        case ActionType.ADD:
            const player = action.value as IFavoritePlayer;

            if (players.find(({id}) => id === player.id)) {
                return players;
            }

            return [...players, action.value];
        case ActionType.REMOVE:
            const playerId = action.value as number;

            return players.filter(({id}) => id !== playerId);
        default:
            return players;
    }
}