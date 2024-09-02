import { describe, expect, it } from 'vitest'
import { getPlayerId } from '../models'
import { selectPlayersWithPosition, selectPositions } from './playersSlice'

describe('selectPositions', () => {
  it('should return an array of unique permissions', () => {
    const QB = { playerTeamBye: '', position: 'QB', rank: 0 }
    const WR = { playerTeamBye: '', position: 'WR', rank: 0 }
    const RB = { playerTeamBye: '', position: 'RB', rank: 0 }
    const TE = { playerTeamBye: '', position: 'TE', rank: 0 }
    const DST = { playerTeamBye: '', position: 'DST', rank: 0 }
    const K = { playerTeamBye: '', position: 'K', rank: 0 }

    const positions = selectPositions({
      players: {
        values: {
          [QB.position]: {},
          [WR.position]: {},
          [RB.position]: {},
          [TE.position]: {},
          [DST.position]: {},
          [K.position]: {},
        },
      },
    })

    expect(positions).toHaveLength(6)
    expect(positions).toContain(QB.position)
    expect(positions).toContain(WR.position)
    expect(positions).toContain(RB.position)
    expect(positions).toContain(TE.position)
    expect(positions).toContain(DST.position)
    expect(positions).toContain(K.position)
  })

  it('should return an empty array if no positions found', () => {
    expect(selectPositions({ players: { values: {} } })).toStrictEqual([])
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

    const allPlayers = {
      [QB.position]: {
        [getPlayerId(QB)]: QB,
        [getPlayerId(QB)]: QB,
        [getPlayerId(QB)]: QB,
        [getPlayerId(QB)]: QB,
      },
      [WR.position]: {
        [getPlayerId(WR)]: WR,
        [getPlayerId(WR)]: WR,
        [getPlayerId(WR)]: WR,
        [getPlayerId(WR)]: WR,
      },
      [RB.position]: {
        [getPlayerId(RB)]: RB,
        [getPlayerId(RB)]: RB,
        [getPlayerId(RB)]: RB,
        [getPlayerId(RB)]: RB,
      },
      [TE.position]: {
        [getPlayerId(TE)]: TE,
        [getPlayerId(TE)]: TE,
        [getPlayerId(TE)]: TE,
        [getPlayerId(TE)]: TE,
      },
      [DST.position]: {
        [getPlayerId(DST)]: DST,
        [getPlayerId(DST)]: DST,
        [getPlayerId(DST)]: DST,
        [getPlayerId(DST)]: DST,
      },
      [K.position]: {
        [getPlayerId(K)]: K,
        [getPlayerId(K)]: K,
        [getPlayerId(K)]: K,
        [getPlayerId(K)]: K,
      },
    }

    expect(
      selectPlayersWithPosition(QB.position)({
        players: {
          values: {
            [QB.position]: allPlayers[QB.position],
          },
        },
      })
    ).toStrictEqual(allPlayers[QB.position])
  })

  it('should return no players if there are no matches', () => {
    const QB = { playerTeamBye: 'mike', position: 'QB', rank: 0 }

    expect(
      selectPlayersWithPosition('MANAGER')({ players: { values: { [QB.position]: { [getPlayerId(QB)]: QB } } } })
    ).toEqual(undefined)
  })
})
