import {createStore} from 'redux'
import {combinedReducer} from "./reducers";
import {middlewareEnhancer} from "./middlewares";
import {IFavoritePlayer, IPlayer, ITeam} from "../interfaces";

const preloadedState = JSON.parse(localStorage.getItem('store-state') || '') || {};

const store = createStore(combinedReducer, preloadedState, middlewareEnhancer);

export default store;

export interface IState {
    favoriteTeams: ITeam[],
    favoritePlayers: IFavoritePlayer[],
    teams: ITeam[],
    selectedTeamPlayers: IPlayer[]
}
