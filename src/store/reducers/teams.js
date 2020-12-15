export function teamsReducer(state = [], action) {
    switch (action.type) {
        case 'teams':
            return action.value;
        default:
            return state;
    }
}

