import {describe, it} from 'node:test'
import assert from 'node:assert/strict'
import {resolveStoicismEntryNeighbors} from '../app/utils/stoicism-entry-neighbors.ts'

const january = [
    {stem: 'stoicism/01/31', path: '/stoicism/01/31', title: 'Jan 31'},
    {stem: 'stoicism/01/01', path: '/stoicism/01/01', title: 'Jan 1'},
    {stem: 'stoicism/01/02', path: '/stoicism/01/02', title: 'Jan 2'},
]

const december = [
    {stem: 'stoicism/12/31', path: '/stoicism/12/31', title: 'Dec 31'},
]

const february = [
    {stem: 'stoicism/02/01', path: '/stoicism/02/01', title: 'Feb 1'},
]

describe('resolveStoicismEntryNeighbors', () => {
    it('returns adjacent days within the same month', () => {
        const {prev, next} = resolveStoicismEntryNeighbors(january, 'stoicism/01/02')
        assert.equal(prev?.stem, 'stoicism/01/01')
        assert.equal(next?.stem, 'stoicism/01/31')
    })

    it('crosses into the previous month when on the first day', () => {
        const {prev, next} = resolveStoicismEntryNeighbors(
            [{stem: 'stoicism/02/01', path: '/stoicism/02/01', title: 'Feb 1'}],
            'stoicism/02/01',
            january,
        )
        assert.equal(prev?.stem, 'stoicism/01/31')
        assert.equal(next, null)
    })

    it('crosses into the next month when on the last day', () => {
        const {prev, next} = resolveStoicismEntryNeighbors(
            [{stem: 'stoicism/12/31', path: '/stoicism/12/31', title: 'Dec 31'}],
            'stoicism/12/31',
            undefined,
            february,
        )
        assert.equal(prev, null)
        assert.equal(next?.stem, 'stoicism/02/01')
    })

    it('returns null neighbors when the current stem is missing', () => {
        const result = resolveStoicismEntryNeighbors(january, 'stoicism/01/99')
        assert.deepEqual(result, {prev: null, next: null})
    })
})