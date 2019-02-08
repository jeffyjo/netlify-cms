// This is a holding og queries written in a multi-line string to avoid graphql dependencies

export const IndexQuery = `
query IndexQuery {
  allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "article" } }}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}`