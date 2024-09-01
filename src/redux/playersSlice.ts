import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Player } from '../models'

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
    },
  },
})

export const { setValues } = playersSlice.actions

export const selectPlayersWithPosition = (position: string) => (state: RootState) =>
  state.players.values.filter((player) => player.pos === position)

export const selectPositions = (state: RootState) => {
  const positions: string[] = []

  state.players.values.forEach((player) => {
    if (positions.find((value) => value === player.pos)) return
    positions.push(player.pos)
  })

  return positions
}

export default playersSlice.reducer
