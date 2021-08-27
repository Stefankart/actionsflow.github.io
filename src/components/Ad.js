import React from "react"

const AD = props => {
  return (
    <section className="cta">
      <div align="center">
        <h1>Sponsorships</h1>
        <br />
        <a href="https://meercode.io/?utm_campaign=github_repo&utm_medium=referral&utm_content=actionsflow&utm_source=github">
          <div>
            <img
              src="https://raw.githubusercontent.com/actionsflow/actionsflow/main/docs/assets/meercode-logo.png"
              width="192"
              alt="Meercode"
            />
          </div>
          <b>
            Meercode is the ultimate monitoring dashboard for your CI/CD builds.
          </b>
          <div>
            <sup>
              Works with GitHub Actions, GitLab CI, Azure DevOps, Vercel, Travis
              CI, Bitrise and Buddy.
            </sup>
          </div>
        </a>
      </div>
    </section>
  )
}

export default AD
