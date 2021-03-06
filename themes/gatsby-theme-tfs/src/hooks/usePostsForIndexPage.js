import { useStaticQuery, graphql } from "gatsby";

const usePostsForIndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMdx(
        filter: { frontmatter: { title: { ne: "" } } }
        limit: 6
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
            readingTime {
              words
              time
              minutes
              text
            }
          }
          excerpt
        }
      }
    }
  `);
  let postsArray = [];
  data.posts.nodes.map((post) => {
    const postObject = {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
      slug: post.fields.slug,
      timeToRead: post.fields.readingTime.text,
      thumbnail: post.frontmatter.thumbnail,
    };
    postsArray.push(postObject);
    return postsArray;
  });
  return postsArray;
};

export default usePostsForIndexPage;
