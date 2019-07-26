import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/sankey/">Budget Sankey</Link>&nbsp;|&nbsp;
    <Link to="/d3test/">D3 Example</Link>&nbsp;|&nbsp;
    <Link to="/chart/">Bar Chart Example</Link>


  </Layout>
)

export default IndexPage
