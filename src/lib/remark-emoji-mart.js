import data from '@emoji-mart/data' with { type: 'json' }
import { visit } from 'unist-util-visit'

// Build a map of shortcode -> native emoji from emoji-mart data
const shortcodeMap = new Map()

for (const emoji of Object.values(data.emojis)) {
  const native = emoji.skins?.[0]?.native
  if (native) {
    // Add the emoji id as a shortcode
    shortcodeMap.set(emoji.id, native)
  }
}

// Additional aliases that emoji-mart uses differently or doesn't include
const aliases = {
  'thumbsup': '👍',
  'thumbs_up': '👍',
  'thumbsdown': '👎',
  'thumbs_down': '👎',
  'poop': '💩',
  'shit': '💩',
  'salute': '🫡',
  'cowboy': '🤠',
}

for (const [code, emoji] of Object.entries(aliases)) {
  if (!shortcodeMap.has(code)) {
    shortcodeMap.set(code, emoji)
  }
}

/**
 * Remark plugin to convert emoji shortcodes to native emojis
 * using emoji-mart's data for full compatibility
 */
export default function remarkEmojiMart() {
  return (tree) => {
    visit(tree, 'text', (node) => {
      const text = node.value
      // Match :shortcode: pattern, including multipliers like :+1:×2
      const regex = /:([a-zA-Z0-9_+-]+):(×\d+)?/g
      
      node.value = text.replace(regex, (match, shortcode, multiplier) => {
        const emoji = shortcodeMap.get(shortcode)
        if (emoji) {
          return emoji + (multiplier || '')
        }
        // Keep original if no match found
        return match
      })
    })
  }
}
