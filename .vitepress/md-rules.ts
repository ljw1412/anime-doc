import type MarkdownIt from 'markdown-it'

const RUBY_RE = /^\[\[rb:(.+?)>(.+?)\]\]/

export default function (md: MarkdownIt) {
  md.inline.ruler.after('text', 'ruby', (state, silent) => {
    const max = state.posMax
    let start = state.pos
    const content = state.src.substring(start)
    if (silent || !RUBY_RE.test(content) || state.src.charAt(start) !== '[') {
      return false
    }

    const matched = content.match(RUBY_RE)
    if (!matched) return false
    const end = start + (matched.index || 0) + matched[0].length
    while (state.pos < max) {
      if (
        state.src.charAt(state.pos) === ']' &&
        state.src.charAt(state.pos + 1) === ']'
      )
        break
      state.md.inline.skipToken(state)
    }
    // console.log(content)
    // console.log(start, end, state.pos, state.posMax)
    // console.log('=========')

    const token_ruby_open = state.push('ruby_open', 'ruby', 1)
    token_ruby_open.markup = '[['
    const token_text = state.push('text', '', 0)
    token_text.content = matched[1].trim()

    const token_rt_open = state.push('rt_open', 'rt', 1)
    const token_rt_text = state.push('text', '', 0)
    token_rt_text.content = matched[2].trim()
    const token_rt_close = state.push('rt_close', 'rt', -1)

    const token_ruby_close = state.push('ruby_close', 'ruby', -1)
    token_ruby_close.markup = ']]'

    state.pos = end
    state.posMax = max
    return true
  })
}
