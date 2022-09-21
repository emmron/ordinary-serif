import React from "react"
import { graphql } from "gatsby"

const OrdinaryMenu = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
    {
        site {
            siteMetadata {
                menuLinks {
                    link
                }
            }
        }
    }
`

export default OrdinaryMenu
