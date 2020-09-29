import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Backdrop from "./BackdropSection"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  let navClasses = "nav-links"
  let navItemClasses = "nav-link-item"
  let burgerClass = "burger"
  let backdropClass = "backdrop"
  if (isOpen) {
    navClasses = "nav-links nav-active"
    navItemClasses = "nav-link-item-active"
    burgerClass = "burger toggle"
    backdropClass = "backdrop backdrop-active"
  }

  return (
    <header>
      <Backdrop activeClass={backdropClass} click={toggle} />
      <nav className="navbar">
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/">
                <div className="logo-image"></div>
                {siteTitle}
              </Link>
            </h4>
          </div>
          <ul className={navClasses}>
            <li className={navItemClasses}>
              <a href="https://actionsflow.github.io/docs/">Docs</a>
            </li>
            <li className={navItemClasses}>
              <a href="https://actionsflow.github.io/docs/triggers/#triggers-list">
                Triggers
              </a>
            </li>
            <li className={navItemClasses}>
              <a href="https://actionsflow.github.io/docs/concepts/">
                Concepts
              </a>
            </li>
            <li className={navItemClasses}>
              <a href="https://actionsflow.github.io/docs/reference/">
                Reference
              </a>
            </li>
            <li className={navItemClasses}>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://github.com/actionsflow/actionsflow"
              >
                Github
              </a>
            </li>
            <li className={navItemClasses}>
              <a href="/docs/about/">About</a>
            </li>
            <li className={`${navItemClasses} nav-item-bold`}>
              <a href="/docs/getting-started/">Get Started</a>
            </li>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
