import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Player } from '../models'
import { sortPlayers } from '../helpers/sorting'

// Define a type for the slice state
interface PlayersState {
  filteredValues: { [position: string]: Player[] | undefined }
  values: Player[]
}

// Define the initial state using that type
const initialState: PlayersState = {
  filteredValues: {},
  values: [],
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<Player[]>) => {
      state.values = action.payload
      state.values = sortPlayers(state.values)!

      const positions = selectPositions({ players: state })

      positions.forEach((position) => {
        state.filteredValues[position] = sortPlayers(filterPlayersWithPosition(position)({ players: state }))
      })
    },
    togglePlayerDrafted: (state, action: PayloadAction<Player>) => {
      const comparer = (p: Player) => p.playerTeamBye === action.payload.playerTeamBye && p.rank === action.payload.rank

      const player = state.values.find(comparer)
      const filteredPlayer = state.filteredValues[action.payload.position]?.find(comparer)

      if (player) {
        player.drafted = !player.drafted
      }

      if (filteredPlayer) {
        filteredPlayer.drafted = !filteredPlayer.drafted
      }
    },
  },
})

export const { togglePlayerDrafted, setValues } = playersSlice.actions

export const selectPlayers = (state: RootState) => state.players.values

export const selectFilteredPlayers = (state: RootState) => state.players.filteredValues

const filterPlayersWithPosition = (position: string) =>
  createSelector([selectPlayers], (players) => {
    return players.filter((player) => player.position === position)
  })

export const selectPlayersWithPosition = (position: string) =>
  createSelector([selectFilteredPlayers], (filteredPlayers) => filteredPlayers[position])

export const selectPositions = createSelector([selectPlayers], (players) => {
  const positions: string[] = []

  players.forEach((player) => {
    if (positions.find((value) => value === player.position)) return
    positions.push(player.position)
  })

  return positions.sort((a, b) => b.localeCompare(a))
})

export default playersSlice.reducer
