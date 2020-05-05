import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section/Section"
import Header from "../components/Header/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Bekah Baker - Web Developer" />
    <Section background="primary" id="about">
      <Header />
    </Section>
  </Layout>
)

export default IndexPage
