import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from "./header/header"
import './index.scss'

import privacy from "../pdf/privacy_policy.pdf"
import terms from "../pdf/terms_of_use.pdf"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="BP Community Scholarship"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]}
    />
    <Header />
    <div className="content">
      {children()}
    </div>
    <footer style={{borderTop: "1px solid black", padding: "0.25rem", paddingLeft: "0.5rem"}}>
      <a target="_blank" href={privacy} style={{paddingRight: "0.5rem"}}>Privacy Policy</a>
      <a target="_blank" href={terms}>Terms of Use</a>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
