import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import ContactLinks from "../components/Contact/ContactLinks"

const SecondPage = () => (
  <Layout>
    <SEO title="contact" />
    <Section type="default">
      <ContactLinks />
    </Section>
  </Layout>
)

export default SecondPage
