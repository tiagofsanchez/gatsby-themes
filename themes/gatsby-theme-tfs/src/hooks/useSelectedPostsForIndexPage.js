import { useStaticQuery, graphql } from "gatsby";

const useSelectedPostsForIndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMdx(
        filter: { frontmatter: { title: { ne: "" }, selected: { eq: "yes" } } }
        limit: 5
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  `);
  let selectedPostsArray = [];
  data.posts.nodes.map((post) => {
    const postObject = {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
      slug: post.fields.slug,
      timeToRead: post.timeToRead,
      thumbnail: post.frontmatter.thumbnail,
    };
    selectedPostsArray.push(postObject);
    return selectedPostsArray;
  });
  return selectedPostsArray;
};

export default useSelectedPostsForIndexPage;
