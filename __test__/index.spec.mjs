import test from 'ava'

import { bbcodeToHtml } from '../index.js'

test('test bbcodeToHtml from docs.rs example', (t) => {
  t.is(bbcodeToHtml("I'm [i]italic[/i] and [b]bold![/b]"), "<p>I&#x27m <i>italic</i> and <b>bold!</b></p>")
  t.is(bbcodeToHtml("I'm [colour]missing an argument![/colour]"), "<p>I&#x27m missing an argument!</p>")
  t.is(bbcodeToHtml("[quote][/quote]"), "")
})

test('test bbcodeToHtml from docs.rs example (ugly variant)', (t) => {
  t.is(bbcodeToHtml("I'm [colour]missing an argument![/colour]", { ugly: true }), "<p>I&#x27m [colour]missing an argument![/colour]</p>")
  t.is(bbcodeToHtml("[quote][/quote]", { ugly: true }), "<blockquote></blockquote>")
})
