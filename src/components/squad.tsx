import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPlayers} from "../store/actions/players";

export interface IFavoritePlayer {
    id: number;
    player: string;
    teamId: number;
}

interface IProps {

}

export const Squad: React.FunctionComponent<IProps> = (props) => {
    const players = useSelector(state => state.selectedTeamPlayers);
    const favoritePlayers = useSelector(({favoritePlayers}) => favoritePlayers);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadPlayers(props.team.id));

        return () => {
            dispatch({type: 'selected-team', value: []})
        };
    }, []);

    return (
        players.map(player => (
            <div key={player.id}
                 className={`${favoritePlayers.find(({id}) => id === player.id) ? 'team__card_favorite' : ''}`}>
                <p>{player.name}</p>
                <button onClick={() => {
                    dispatch({
                        type: 'favorite-player/add', value: {
                            id: player.id, player: player.name, teamId: props.team.id
                        }
                    });
                }}>add player
                </button>
                <button onClick={() => {
                    dispatch({type: 'favorite-player/remove', value: player.id});
                }}>remove player
                </button>
            </div>
        ))
    );
}