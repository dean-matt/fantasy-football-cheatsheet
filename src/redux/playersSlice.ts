import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Player } from '../models'
import { sortPlayers } from '../helpers/sorting'

// Define a type for the slice state
interface PlayersState {
  values: Player[]
}

// Define the initial state using that type
const initialState: PlayersState = {
  values: [],
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<Player[]>) => {
      state.values = action.payload
      state.values = sortPlayers(state.values)
    },
    togglePlayerDrafted: (state, action: PayloadAction<Player>) => {
      const player = state.values.find(
        (p) => p.playerTeamBye === action.payload.playerTeamBye && p.rank === action.payload.rank
      )

      if (player) {
        player.drafted = !player.drafted
      }

      state.values = sortPlayers(state.values)
    },
  },
})

export const { togglePlayerDrafted, setValues } = playersSlice.actions

export const selectPlayers = (state: RootState) => state.players.values

export const selectPlayersWithPosition = (position: string) =>
  createSelector([selectPlayers], (players) => {
    return players.filter((player) => player.position === position)
  })

export const selectPositions = createSelector([selectPlayers], (players) => {
  const positions: string[] = []

  players.forEach((player) => {
    if (positions.find((value) => value === player.position)) return
    positions.push(player.position)
  })

  return positions.sort()
})

export default playersSlice.reducer
