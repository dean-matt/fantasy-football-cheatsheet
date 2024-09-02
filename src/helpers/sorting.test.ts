import { describe, expect, it } from 'vitest'
import { Player } from '../models'
import { sortPlayers } from './sorting'

describe('sortPlayers', () => {
  it('should sort players by descending rank', () => {
    const rank1: Player = { drafted: false, playerTeamBye: '', position: '', rank: 1 }
    const rank2: Player = { drafted: false, playerTeamBye: '', position: '', rank: 2 }
    const rank3: Player = { drafted: false, playerTeamBye: '', position: '', rank: 3 }

    expect(sortPlayers([rank3, rank1, rank2])).toStrictEqual([rank1, rank2, rank3])
    expect(sortPlayers([rank1, rank3, rank2])).toStrictEqual([rank1, rank2, rank3])
    expect(sortPlayers([rank2, rank1, rank3])).toStrictEqual([rank1, rank2, rank3])
    expect(sortPlayers([rank3, rank2, rank1])).toStrictEqual([rank1, rank2, rank3])
    expect(sortPlayers([rank2, rank3, rank1])).toStrictEqual([rank1, rank2, rank3])
  })

  it('should return undefined if passed undefined', () => {
    expect(sortPlayers()).toEqual(undefined)
  })
})
