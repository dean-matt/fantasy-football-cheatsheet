import { Player } from '../models'

export const sortPlayers = (players?: Player[]) => {
  if (!players) return undefined

  const sorted = [...players]

  sorted.sort((player1, player2) => {
    if (!player1.drafted && player2.drafted) return -1
    else if (player1.drafted && !player2.drafted) return 1
    else {
      if (player1.rank > player2.rank) return 1
      else if (player1.rank < player2.rank) return -1
    }

    return 0
  })

  return sorted
}
