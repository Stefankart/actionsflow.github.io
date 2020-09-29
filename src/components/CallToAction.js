import React from "react"
import Button from "./Button"

const CallToAction = props => {
  return (
    <section className="cta">
      <h1>Let’s start automating</h1>
      <p>saves time and reduces tedium.</p>
      <a href="/docs/">
        <Button label="Get Started" />
      </a>
    </section>
  )
}

export default CallToAction
