import React from 'react'
import Link from 'gatsby-link'
import groupPhoto from '../groupPhoto.jpg'
import Eligibility from "../containers/eligibility"
import Instructions from "../containers/instructions"
import SelectionCriteria from "../containers/selection-criteria"
import Contact from "../containers/contact"

const IndexPage = () => (
  <div>
    <img src={groupPhoto} className="heroImage" />
    <section>
      <p>This year marks the 31th year of the BP Community Scholarship Program serving the New York and northern New Jersey area.  Since its inception, the program has awarded over $3 million and is approaching 2,000 scholarships benefiting promising students.</p>
      <p>Each year our scholarship awardees are honored at a scholarship reception. This annual event provides an opportunity to recognize the scholarship awardees along with their families and also provides an opportunity for our students to meet BP representatives and other invited dignitaries.</p>
      <p>BP is pleased to support this initiative as a way of giving back to the communities in which we operate by encouraging local high school seniors to pursue their dreams of going to college.</p>
    </section>
    <Instructions />
    <Eligibility />
    <SelectionCriteria />
    <Contact />
  </div>
)

export default IndexPage
