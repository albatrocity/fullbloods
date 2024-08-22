import React from 'react'
import rehypeReact from 'rehype-react'
import { Text } from '../components/Text'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { p: Text },
}).Compiler

export default renderAst
