import { Player } from '../models'

export const sortPlayers = (players?: Player[]) => {
  if (!players) return undefined

  const sorted = [...players]

  sorted.sort((player1, player2) => {
    if (player1.rank > player2.rank) return 1
    else if (player1.rank < player2.rank) return -1
    else return 0
  })

  return sorted
}
