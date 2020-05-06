import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Work from "../components/Work/Work"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Section type="default" id="work">
      <Work />
    </Section>
  </Layout>
)

export default SecondPage
