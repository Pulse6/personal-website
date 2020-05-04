import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      {/* <h1 style={{ margin: 0 }}> */}
        {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> */}
      {/* </h1> */}
      <ul>
        <li><Link to="/"><i class="fas fa-user"></i>ABOUT</Link></li>
        <li><Link to="/contact"><i class="fas fa-envelope"></i>CONTACT</Link></li>
        {/* <li><Link to="/resume/">RESUME</Link></li> */}
      </ul>
    </div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
