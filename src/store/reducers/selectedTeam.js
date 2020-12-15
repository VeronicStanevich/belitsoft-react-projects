export function selectedTeamReducer(players = [], action) {
    switch (action.type) {
        case 'selected-team':
            return action.value;
        default:
            return players;
    }
}

