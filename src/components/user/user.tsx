import {useSelector} from "react-redux";
import {ITeam} from "../../api/interfaces";
import {IState} from "../../store";
import {FunctionComponent} from "react";
import {IFavoritePlayer} from "../squad";

export const User: FunctionComponent = () => {
    const teams = useSelector<IState, ITeam[]>(state => state.favoriteTeams);
    const favoritePlayers = useSelector<IState, IFavoritePlayer[]>(state => state.favoritePlayers);

    return (
        <>
            {teams.map((team) => {
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
            })}
        </>
    );
};