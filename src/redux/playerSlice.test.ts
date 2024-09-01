import { describe, expect, it } from 'vitest'
import { Player } from '../models'
import { selectPlayersWithPosition, selectPositions } from './playersSlice'

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

describe('selectPlayersWithPosition', () => {
  it('should return an array of players with the selected positions', () => {
    const QB = { playerTeamBye: 'mike', pos: 'QB', rank: 0 }
    const WR = { playerTeamBye: 'steve', pos: 'WR', rank: 0 }
    const RB = { playerTeamBye: 'tim', pos: 'RB', rank: 0 }
    const TE = { playerTeamBye: 'joe', pos: 'TE', rank: 0 }
    const DST = { playerTeamBye: 'gary', pos: 'DST', rank: 0 }
    const K = { playerTeamBye: 'dave', pos: 'K', rank: 0 }

    // There is 4 of each player here
    const players: Player[] = [
      QB,
      WR,
      TE,
      K,
      RB,
      QB,
      WR,
      RB,
      RB,
      TE,
      WR,
      QB,
      DST,
      TE,
      DST,
      K,
      QB,
      K,
      WR,
      RB,
      DST,
      TE,
      DST,
      K,
    ]

    expect(selectPlayersWithPosition(QB.pos)({ players: { values: players } })).toStrictEqual([QB, QB, QB, QB])
    expect(selectPlayersWithPosition(WR.pos)({ players: { values: players } })).toStrictEqual([WR, WR, WR, WR])
    expect(selectPlayersWithPosition(RB.pos)({ players: { values: players } })).toStrictEqual([RB, RB, RB, RB])
    expect(selectPlayersWithPosition(TE.pos)({ players: { values: players } })).toStrictEqual([TE, TE, TE, TE])
    expect(selectPlayersWithPosition(DST.pos)({ players: { values: players } })).toStrictEqual([DST, DST, DST, DST])
    expect(selectPlayersWithPosition(K.pos)({ players: { values: players } })).toStrictEqual([K, K, K, K])
  })

  it('should return no players if there are no matches', () => {
    const QB = { playerTeamBye: 'mike', pos: 'QB', rank: 0 }
    const WR = { playerTeamBye: 'steve', pos: 'WR', rank: 0 }
    const RB = { playerTeamBye: 'tim', pos: 'RB', rank: 0 }
    const TE = { playerTeamBye: 'joe', pos: 'TE', rank: 0 }
    const DST = { playerTeamBye: 'gary', pos: 'DST', rank: 0 }
    const K = { playerTeamBye: 'dave', pos: 'K', rank: 0 }

    // There is 4 of each player here
    const players: Player[] = [
      QB,
      WR,
      TE,
      K,
      RB,
      QB,
      WR,
      RB,
      RB,
      TE,
      WR,
      QB,
      DST,
      TE,
      DST,
      K,
      QB,
      K,
      WR,
      RB,
      DST,
      TE,
      DST,
      K,
    ]

    expect(selectPlayersWithPosition('MANAGER')({ players: { values: players } })).toStrictEqual([])
  })
})
