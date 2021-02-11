import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'


const NotFoundPage = () => {
  return (
    <main >
      <Layout>
        <title>Not found</title>
        <h1 >Page not found</h1>
        <Link to="/">Go home</Link>
      </Layout>
    </main>
  )
}

export default NotFoundPage
