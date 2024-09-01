import { describe, expect, it } from 'vitest'
import { Player } from '../models'
import { selectPlayersWithPosition, selectPositions } from './playersSlice'

describe('selectPositions', () => {
  it('should return an array of unique permissions', () => {
    const QB = { playerTeamBye: '', position: 'QB', rank: 0 }
    const WR = { playerTeamBye: '', position: 'WR', rank: 0 }
    const RB = { playerTeamBye: '', position: 'RB', rank: 0 }
    const TE = { playerTeamBye: '', position: 'TE', rank: 0 }
    const DST = { playerTeamBye: '', position: 'DST', rank: 0 }
    const K = { playerTeamBye: '', position: 'K', rank: 0 }

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

    const positions = selectPositions({ players: { filteredValues: {}, values: players } })

    expect(positions).toHaveLength(6)
    expect(positions).toContain(QB.position)
    expect(positions).toContain(WR.position)
    expect(positions).toContain(RB.position)
    expect(positions).toContain(TE.position)
    expect(positions).toContain(DST.position)
    expect(positions).toContain(K.position)
  })

  it('should return an empty array if no positions found', () => {
    expect(selectPositions({ players: { filteredValues: {}, values: [] } })).toStrictEqual([])
  })
})

describe('selectPlayersWithPosition', () => {
  it('should return an array of players with the selected positions', () => {
    const QB = { playerTeamBye: 'mike', position: 'QB', rank: 0 }
    const WR = { playerTeamBye: 'steve', position: 'WR', rank: 0 }
    const RB = { playerTeamBye: 'tim', position: 'RB', rank: 0 }
    const TE = { playerTeamBye: 'joe', position: 'TE', rank: 0 }
    const DST = { playerTeamBye: 'gary', position: 'DST', rank: 0 }
    const K = { playerTeamBye: 'dave', position: 'K', rank: 0 }

    // There is 4 of each player here
    const playersQB: Player[] = [QB, QB, QB, QB]
    const playersWR: Player[] = [WR, WR, WR, WR]
    const playersRB: Player[] = [RB, RB, RB, RB]
    const playersTE: Player[] = [TE, TE, TE, TE]
    const playersDST: Player[] = [DST, DST, DST, DST]
    const playersK: Player[] = [K, K, K, K]

    expect(
      selectPlayersWithPosition(QB.position)({ players: { filteredValues: { [QB.position]: playersQB }, values: [] } })
    ).toStrictEqual([QB, QB, QB, QB])
    expect(
      selectPlayersWithPosition(WR.position)({ players: { filteredValues: { [WR.position]: playersWR }, values: [] } })
    ).toStrictEqual([WR, WR, WR, WR])
    expect(
      selectPlayersWithPosition(RB.position)({ players: { filteredValues: { [RB.position]: playersRB }, values: [] } })
    ).toStrictEqual([RB, RB, RB, RB])
    expect(
      selectPlayersWithPosition(TE.position)({ players: { filteredValues: { [TE.position]: playersTE }, values: [] } })
    ).toStrictEqual([TE, TE, TE, TE])
    expect(
      selectPlayersWithPosition(DST.position)({
        players: { filteredValues: { [DST.position]: playersDST }, values: [] },
      })
    ).toStrictEqual([DST, DST, DST, DST])
    expect(
      selectPlayersWithPosition(K.position)({ players: { filteredValues: { [K.position]: playersK }, values: [] } })
    ).toStrictEqual([K, K, K, K])
  })

  it('should return no players if there are no matches', () => {
    const QB = { playerTeamBye: 'mike', position: 'QB', rank: 0 }

    // There is 4 of each player here
    const players: Player[] = [QB]

    expect(
      selectPlayersWithPosition('MANAGER')({ players: { filteredValues: { [QB.position]: players }, values: [] } })
    ).toEqual(undefined)
  })
})
