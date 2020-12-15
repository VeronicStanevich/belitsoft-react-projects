import {useSelector} from "react-redux";

export const User = () => {
    const teams = useSelector(state => state.favoriteTeams);
    const favoritePlayers = useSelector(state => state.favoritePlayers);

    return (
        teams.map((team) => {
            const players = favoritePlayers.filter(({teamId}) => teamId === team.id);

            return (
                <div key={team.id}>
                    <h3>{team.name}</h3>
                    <ul>
                        {players.map((palyer) => {
                            return (
                                <li key={palyer.id}>{palyer.player}</li>
                            );
                        })}
                    </ul>
                </div>
            );
        })
    );
};