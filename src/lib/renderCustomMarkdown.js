import React from 'react'
import rehypeReact from 'rehype-react'
import { Anchor } from 'grommet'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { a: Anchor },
}).Compiler

export default renderAst
