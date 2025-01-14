import React from 'react'

const name = "Instructions"

const Instructions = () => (
    <div>
        <a className="anchor" name={name} />
        <h3>{name}</h3>
        <section>
            <p>All applications must be submitted online by March 21, 2025.</p>
            <p>Applicants will be required to upload a 500 - 750 word personal statement addressing all of the following questions:</p>
            <ul>
                <li>What have been the most important experiences during your high school years that have prepared you for college?</li>
                <li>What do you wish to achieve from your college education?</li>
                <li>Why should you be considered for a BP Community Scholarship?</li>
            </ul>
            <p>Applicants must also submit an officially signed transcript.</p>
            <p>Applicants must submit a copy of their FAFSA Submission Summary showing their Student Aid Index (SAI).</p>
        </section>
    </div>
)

export default Instructions
