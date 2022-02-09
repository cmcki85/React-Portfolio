import React from "react"

import { Helmet } from "react-helmet"
import {Link} from 'react-router-dom'
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Cameron Mckiddie | 404 Not Found</title>
    </Helmet>
    <span className="flex justify-center font-nav-title text-3xl pb-2">Page Not Found!</span>
    <article className="flex items-center flex-col font-body p-8 text-lg">
      <p className="pb-2">Oops the page you are looking for has been removed or relocated</p>
      <Link className="font-semi-bold hover:text-body-emphasize" to="/">Go Back</Link>
    </article>
    
  </Layout>
)

export default NotFoundPage