import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {loadTeams} from "../../store/actions/teams";
import {ITeam} from "../../interfaces";
import {IState} from "../../store";

export const Teams: React.FunctionComponent = () => {
    const favoriteTeams = useSelector<IState, ITeam[]>(state => state.favoriteTeams);
    const teams = useSelector<IState, ITeam[]>(state => state.teams);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadTeams());
    }, []);

    return (
        <div className="teams">
            {teams.map((team) => (
                <div key={team.id}
                     className={`team__card ${favoriteTeams.find(({id}) => id === team.id) ? 'team__card_favorite' : ''}`}>
                    <button className="team__add_to_favourite" onClick={(event) => {
                        event.stopPropagation();
                        dispatch({type: 'favorite/add', value: {id: team.id, name: team.name}})
                    }}>add to favorite
                    </button>
                    <button className="team__remove_from_favourite" onClick={(event) => {
                        event.stopPropagation();
                        dispatch({type: 'favorite/remove', value: team.id})
                    }}>remove from favorite
                    </button>
                    <Link className="team__link" key={team.id} to={`/squad/${team.id}`}>
                        <img className="team__logo" alt={team.name} src={team.crestUrl}/>
                        <p>{team.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};
