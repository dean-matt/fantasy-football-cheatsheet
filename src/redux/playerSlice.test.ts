import { describe, expect, it } from 'vitest'
import { Player } from '../models'
import { selectPositions } from './playersSlice'

describe('selectPositions', () => {
  it('should return an array of unique permissions', () => {
    const QB = { playerTeamBye: '', pos: 'QB', rank: 0 }
    const WR = { playerTeamBye: '', pos: 'WR', rank: 0 }
    const RB = { playerTeamBye: '', pos: 'RB', rank: 0 }
    const TE = { playerTeamBye: '', pos: 'TE', rank: 0 }
    const DST = { playerTeamBye: '', pos: 'DST', rank: 0 }
    const K = { playerTeamBye: '', pos: 'K', rank: 0 }

    const players: Player[] = [
      QB,
      QB,
      QB,
      WR,
      WR,
      WR,
      RB,
      RB,
      RB,
      TE,
      TE,
      TE,
      DST,
      DST,
      DST,
      K,
      K,
      K,
      QB,
      WR,
      RB,
      TE,
      DST,
      K,
    ]

    expect(selectPositions({ players: { values: players } })).toStrictEqual([
      QB.pos,
      WR.pos,
      RB.pos,
      TE.pos,
      DST.pos,
      K.pos,
    ])
  })

  it('should return an empty array if no positions found', () => {
    expect(selectPositions({ players: { values: [] } })).toStrictEqual([])
  })
})
