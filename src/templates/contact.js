import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';

const Contact = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-default-single">
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            <h1 className="title">{title}</h1>
            <Call showButton={false} />
            <div className="content mt-4" dangerouslySetInnerHTML={{ __html: html }} />
            <form method="post" action="#">
              <label>
                Name
                <input type="text" name="name" id="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" id="email" />
              </label>
              <label>
                Subject
                <input type="text" name="subject" id="subject" />
              </label>
              <label>
                Message
                <textarea name="message" id="message" rows="5" />
              </label>
              <button type="submit">Send</button>
              <input type="reset" value="Clear" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Contact;
