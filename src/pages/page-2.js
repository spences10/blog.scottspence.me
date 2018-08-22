import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <p>Testing Netlify forms</p>

    <form name="contact" netlify>
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" />
        </label>
      </p>
      <p>
        <textarea name="message" />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
