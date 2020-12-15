export function favoriteTeamsReducer(teams = [], action) {
    switch (action.type) {
        case 'favorite/add':
            if (teams.find(({id}) => id === action.value.id)) {
                return teams;
            }

            return [...teams, action.value];
        case 'favorite/remove':
            return teams.filter(({id}) => id !== action.value);
        default:
            return teams;
    }
}