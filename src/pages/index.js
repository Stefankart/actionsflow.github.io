import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ValueProp from "../components/ValueProp"
import Example from "../components/Example"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
// import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import AD from "../components/Ad"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Actionsflow - Connect your APIs, automate your work for developers"
      description="A free IFTTT/Zapier alternative for developers, Actionsflow helps you to automate workflows. With Actionsflow, you can connect your favorite apps, data, and APIs, receive notifications of actions as they occur, sync files, collect data, and more."
      isSpecificTitle
    />
    <ValueProp />
    <Example />
    <AD />
    <ProductBenefits />
    <ProductFeatures />
    {/* <Testimonials /> */}
    <CallToAction />
  </Layout>
)

export default IndexPage
