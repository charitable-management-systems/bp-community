import React from 'react'

const name = "Eligibility"

const EligibilityPage = () => (
    <div>
        <a name={name} />
        <h3>{name}</h3>
        <section>
            <p>To be considered for a BP Community Scholarship, you must meet all of the following criteria:</p>
            <ul>
                <li>A current high school senior planning to enroll as a full-time student (12 semester hours or more) in an accredited
                two or four-year college or university in the U.S. for the 2018 - 2019 academic year.</li>
                <li>Legally reside in New York City, Long Island, Westchester County or northern New Jersey.</li>
                <li>Possess at least a 2.0 cumulative grade point average on a 4.0 scale.</li>
                <li>Be able to demonstrate financial need.</li>
            </ul>
        </section>
    </div>
)

export default EligibilityPage