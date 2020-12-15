import {combineReducers} from "redux";
import {favoriteTeamsReducer} from "./favorite";
import {teamsReducer} from "./teams";
import {favoritePlayersReducer} from "./favirotePlayers";
import {selectedTeamReducer} from "./selectedTeam";

export const combinedReducer = combineReducers({
    favoriteTeams: favoriteTeamsReducer,
    favoritePlayers: favoritePlayersReducer,
    teams: teamsReducer,
    selectedTeamPlayers: selectedTeamReducer
});

