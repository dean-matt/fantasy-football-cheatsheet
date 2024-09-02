import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { getPlayerId, Player } from '../models'

// Define a type for the slice state
interface PlayersState {
  values: { [position: string]: { [id: string]: Player } }
}

// Define the initial state using that type
const initialState: PlayersState = {
  values: {},
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<Player[] | undefined>) => {
      action.payload?.forEach((player) => {
        if (!state.values[player.position]) state.values[player.position] = {}
        state.values[player.position][getPlayerId(player)] = player
      })
    },
    togglePlayerDrafted: (state, action: PayloadAction<Player>) => {
      const player = action.payload

      if (state.values[player.position]?.[getPlayerId(player)]) {
        state.values[player.position][getPlayerId(player)].drafted = !player.drafted
      }
    },
  },
})

export const { setValues, togglePlayerDrafted } = playersSlice.actions

export const selectValues = (state: RootState) => state.players.values

export const selectPlayersWithPosition = (position: string) =>
  createSelector([selectValues], (values) => {
    if (position) return values[position]
    else return Object.values(values).flat()
  })

export const selectPositions = createSelector([selectValues], (values) => {
  let positions: string[] = []

  if (values) {
    positions = Object.keys(values)
  }

  return positions.sort((a, b) => b.localeCompare(a))
})

export default playersSlice.reducer
