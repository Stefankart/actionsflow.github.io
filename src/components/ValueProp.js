import React from "react"
import Button from "./Button"

const ValueProp = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Automate Workflows for Developers based on Github Actions</h1>
          <p className="main-subtitle">
            Connect your favorite apps, data, and APIs, do any tasks as they
            occur. It's the best IFTTT/Zapier free alternative for developers.
          </p>
          <a href="/docs/">
            <Button label="Get Started" />
          </a>
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
}

export default ValueProp
