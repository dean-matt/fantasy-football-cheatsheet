export interface Player {
  drafted?: boolean
  rank: number
  playerTeamBye: string
  position: string
}

export interface FilteredPlayers {
  position: string
  players?: Player[]
}
