import {useSelector} from "react-redux";
import {IFavoritePlayer, ITeam} from "../../interfaces";
import {IState} from "../../store";
import {FunctionComponent} from "react";

export const User: FunctionComponent = () => {
    const teams = useSelector<IState, ITeam[]>(state => state.favoriteTeams);
    const favoritePlayers = useSelector<IState, IFavoritePlayer[]>(state => state.favoritePlayers);

    return (
        <>
            {teams.map((team) => {
                const players = favoritePlayers.filter(({teamId}) => +teamId === team.id);

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
            })}
        </>
    );
};