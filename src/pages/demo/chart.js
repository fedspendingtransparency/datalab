import React from "react"
import Layout from "../../layouts/default/layout"
import SEO from "../../components/seo"
import Chart from "../../components/demo/barChart"


const ChartPage = () => (
  <Layout>
    <SEO title="Bar Chart Test" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Chart />
    </div>
  </Layout>
)

export default ChartPage