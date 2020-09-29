import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"
import theme from "prism-react-renderer/themes/vsDark"

const exampleCode = `on:
  rss:
    url: https://hnrss.org/newest
jobs:
  ifttt:
    name: Make a Request to IFTTT
    runs-on: ubuntu-latest
    steps:
      - uses: actionsflow/ifttt-webhook-action@v1
        with:
          event: notice
          key: \${{ secrets.IFTTT_KEY }}
          value1: \${{on.rss.outputs.title}}
          value2: \${{on.rss.outputs.contentSnippet}}
          value3: \${{on.rss.outputs.link}}`
const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 30px 20px;
`
const CodeContainer = styled.div`
  padding: 0 0px;
  overflow-x: hidden;
`
const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`

const Line = styled.div`
  display: table-row;
`

const LineContent = styled.span`
  display: table-cell;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 30px;
`
const Example = props => {
  return (
    <Container>
      <CodeContainer>
        <Title>Start your workflow with a simple workflow.yml</Title>
        <Highlight
          {...defaultProps}
          theme={theme}
          code={exampleCode}
          language="yaml"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      </CodeContainer>
    </Container>
  )
}

export default Example
