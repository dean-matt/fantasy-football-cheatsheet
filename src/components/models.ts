export interface Player {
  rank: number
  playerTeamBye: string
  pos: string
}

export interface PlayerPositionCollection {
  position: string
  players: Player[]
}
