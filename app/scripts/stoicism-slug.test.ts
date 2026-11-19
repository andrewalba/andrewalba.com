import {describe, it} from 'node:test'
import assert from 'node:assert/strict'
import {
    ellipsisLegacySlugVariants,
    legacySlugAliases,
    stoicismTitleToSlug,
} from './stoicism-slug.ts'

describe('stoicismTitleToSlug', () => {
    it('slugifies apostrophe contractions like the legacy site', () => {
        assert.equal(
            stoicismTitleToSlug("You Don't Have To Have An Opinion"),
            'you-dont-have-to-have-an-opinion',
        )
        assert.equal(stoicismTitleToSlug("What's Better Left Unsaid"), 'whats-better-left-unsaid')
    })

    it('strips ellipsis punctuation from the slug', () => {
        assert.equal(stoicismTitleToSlug('Opinions Are Like ...'), 'opinions-are-like')
        assert.equal(stoicismTitleToSlug('Meaningless … Like A Fine Wine'), 'meaningless-like-a-fine-wine')
    })
})

describe('legacySlugAliases', () => {
    it('expands do-not variants', () => {
        assert.deepEqual(legacySlugAliases('dont-trust-the-senses'), ['do-not-trust-the-senses'])
    })

    it('expands contraction-based legacy URLs', () => {
        assert.ok(legacySlugAliases('this-is-what-were-here-for').includes('this-is-what-we-are-here-for'))
        assert.ok(legacySlugAliases('no-one-said-itd-be-easy').includes('no-one-said-it-would-be-easy'))
        assert.ok(
            legacySlugAliases('how-can-you-know-if-youve-never-been-tested').includes(
                'how-can-you-know-if-you-have-never-been-tested',
            ),
        )
    })
})

describe('ellipsisLegacySlugVariants', () => {
    it('adds trailing hyphen for ellipsis titles', () => {
        assert.deepEqual(ellipsisLegacySlugVariants('Opinions Are Like ...', 'opinions-are-like'), [
            'opinions-are-like-',
        ])
    })
})