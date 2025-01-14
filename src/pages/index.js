import React from 'react'
import Helmet from 'react-helmet'
import Header from "../layouts/header/header"

import privacy from "../pdf/privacy_policy.pdf"
import terms from "../pdf/terms_of_use.pdf"
import groupPhoto from '../images/groupPhoto.jpg'
import Eligibility from "../containers/eligibility"
import Instructions from "../containers/instructions"
import SelectionCriteria from "../containers/selection-criteria"
import Contact from "../containers/contact"

const IndexPage = () => (
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
      <div>
        <img src={groupPhoto} className="heroImage" />
        <section>
          <p>This year marks the 38th year of the BP Community Scholarship Program serving the New York and northern New Jersey area.  Since its inception, the program has awarded over $3.8 million and over 2,250 scholarships benefiting promising students.</p>
          <p>Each year our scholarship awardees are honored at a scholarship reception. This annual event provides an opportunity to recognize the scholarship awardees along with their families and also provides an opportunity for our students to meet BP representatives and other invited dignitaries.</p>
          <p>BP is pleased to support this initiative as a way of giving back to the communities in which we operate by encouraging local high school seniors to pursue their dreams of going to college.</p>
        </section>
        <Instructions />
        <Eligibility />
        <SelectionCriteria />
        <Contact />
      </div>
    </div>
    <footer style={{ borderTop: "1px solid black", padding: "0.25rem", paddingLeft: "0.5rem" }}>
      <a target="_blank" href={privacy} style={{ paddingRight: "0.5rem" }}>Privacy Policy</a>
      <a target="_blank" href={terms}>Terms of Use</a>
    </footer>
  </div>
)

export default IndexPage
