import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from "./header/header"
import './index.scss'

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
  </div>


  // <Layout>
  //   <Helmet
  //     title="BP Community Scholarship"
  //     meta={[
  //       { name: 'description', content: '' },
  //       { name: 'keywords', content: '' },
  //     ]}
  //   />
  //   <Header theme="Light">
  //     <Menu>
  //       <Menu.Item>Hello</Menu.Item>
  //     </Menu>
  // </Header>
  //   
  // </Layout>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
