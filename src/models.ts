export interface Player {
  drafted: boolean
  rank: number
  playerTeamBye: string
  position: string
}

export interface PlayerPositionCollection {
  position: string
  players: Player[]
}
