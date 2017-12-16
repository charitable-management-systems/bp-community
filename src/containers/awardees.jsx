import React from "react"

export default ({ data }) => {
    const newAwardees = data.allAwardeesJson.edges.map(node => node.node).filter(awardee => awardee.type == "new")
    const renewedAwardees = data.allAwardeesJson.edges.map(node => node.node).filter(awardee => awardee.type == "renewed")
    return (
        <div className="content">
            <h4>BP is proud to recognize the {newAwardees.length} new recipients of the BP Community Scholarship Program entering college in the fall of 2016</h4>
            <div>
            {newAwardees.map(awardee => {
                return (
                    <div key={awardee.name} className="awardee">
                        <div>{awardee.name}</div>
                        <div>{awardee.school}</div>
                        <div>{awardee.location}</div>
                    </div>
                )
            })}
            </div>
            <h4>And, the {renewedAwardees.length} renewal recipients continuing their college education</h4>
            <div>
            {renewedAwardees.map(awardee => {
                return (
                    <div key={awardee.name} className="awardee">
                        <div>{awardee.name}</div>
                        <div>{awardee.school}</div>
                        <div>{awardee.location}</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export const query = graphql`
 query getAwardees {
    allAwardeesJson {
        edges {
            node {
                name,
                school,
                type,
                location,
            }
        }
    }
}`;