import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Squad} from "../squad";
import {User} from "../user/user";
import {loadTeams} from "../../store/actions/teams";

export const Teams = () => {
    const favoriteTeams = useSelector(state => state.favoriteTeams);
    const teams = useSelector(state => state.teams);
    const dispatch = useDispatch();
    const [userPage, setUserPage] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    React.useEffect(() => {
        dispatch(loadTeams());
    }, []);

    if (userPage) {
        return (
            <div>
                <button onClick={() => setUserPage(false)}>Back</button>
                <User/>
            </div>);
    }

    if (selectedTeam) {
        return (
            <div>
                <button onClick={() => {
                    setSelectedTeam(null);
                }}>Reset team selection
                </button>
                <Squad team={selectedTeam}/>
            </div>);
    }

    return (
        <div className="teams">
            <button onClick={() => {
                setUserPage(true);
            }}>Go to user
            </button>
            {teams.map((team) => (
                <div key={team.id}
                     className={`team__card ${favoriteTeams.find(({id}) => id === team.id) ? 'team__card_favorite' : ''}`}
                     onClick={(event) => {
                         event.preventDefault();
                         setSelectedTeam(team);
                     }}>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        dispatch({type: 'favorite/add', value: {id: team.id, name: team.name}})
                    }}>add to favorite
                    </button>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        dispatch({type: 'favorite/remove', value: team.id})
                    }}>remove from favorite
                    </button>
                    <a className="team__link" href="#">
                        <img className="team__logo" alt={team.name} src={team.crestUrl}/>
                        <p>{team.name}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

// export default connect()(Teams);