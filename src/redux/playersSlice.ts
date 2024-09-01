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
    togglePlayerDrafted: (state, action: PayloadAction<Player>) => {
      const player = state.values.find(
        (p) => p.playerTeamBye === action.payload.playerTeamBye && p.rank === action.payload.rank
      )

      if (player) {
        player.drafted = !player.drafted
      }
    },
  },
})

export const { togglePlayerDrafted, setValues } = playersSlice.actions

export const selectPlayersWithPosition = (position: string) => (state: RootState) =>
  state.players.values.filter((player) => player.position === position)

export const selectPositions = (state: RootState) => {
  const positions: string[] = []

  state.players.values.forEach((player) => {
    if (positions.find((value) => value === player.position)) return
    positions.push(player.position)
  })

  return positions
}

export default playersSlice.reducer
