import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Work from "../components/Work"

const SecondPage = () => (
  <Layout>
    <SEO title="work" />
    <Section type="default">
      <Work />
    </Section>
  </Layout>
)

export default SecondPage
