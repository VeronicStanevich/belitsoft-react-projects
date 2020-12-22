export interface ITeam  {
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string,
    address: string,
    phone: string,
    website: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: string
}

export interface IPlayer {
    id: number,
    name: string,
    position: string,
    dateOfBirth: string,
    countryOfBirth: string,
    nationality: string,
    role: string
}