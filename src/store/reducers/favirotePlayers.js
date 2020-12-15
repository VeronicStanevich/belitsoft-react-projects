export function favoritePlayersReducer(players = [], action) {
    switch (action.type) {
        case 'favorite-player/add':
            if (players.find(({id}) => id === action.value.id)) {
                return players;
            }

            return [...players, action.value];
        case 'favorite-player/remove':
            return players.filter(({id}) => id !== action.value);
        default:
            return players;
    }
}