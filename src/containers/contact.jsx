import React from 'react'

const name = "Contact"

const Contact = () => (
    <div>
        <a className="anchor" name={name} />
        <h3>{name}</h3>
        <section>
            <p>Applications must be submitted online</p>
            <p>All required forms and transcripts should be mailed to:</p>
            <p><strong>BP Community Scholarship Program<br />PO Box 648<br />Naperville, IL  60566</strong></p>
            <br />
            <p>For program questions or technical support:</p>
            <p><strong>info@bpscholarships.com<br /><br />630-428-2412</strong></p>
        </section>
    </div>
)

export default Contact