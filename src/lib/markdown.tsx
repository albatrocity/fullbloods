import React from 'react'
import * as prod from 'react/jsx-runtime'
import rehypeReact from 'rehype-react'
import { Text } from '../components/Text'
import { unified } from 'unified'
import type {} from 'unified'
import { Node } from 'unified/lib'
import { Heading } from 'src/components/Heading'

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

const processor = unified().use(rehypeReact, {
  createElement: React.createElement,
  jsx: production.jsx,
  jsxs: production.jsxs,
  Fragment: production.Fragment,
  components: {
    p: (props) => <Text {...props} />,
    h1: (props) => <Heading {...props} level={1} />,
    h2: (props) => <Heading {...props} level={2} />,
    h3: (props) => <Heading {...props} level={3} />,
    h4: (props) => <Heading {...props} level={4} />,
    h5: (props) => <Heading {...props} level={5} />,
    h6: (props) => <Heading {...props} level={6} />,
  },
})

export const renderAst = (ast: Node): JSX.Element => {
  return processor.stringify(ast) as unknown as JSX.Element
}
