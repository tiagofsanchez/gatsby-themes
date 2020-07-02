import { useStaticQuery, graphql } from "gatsby";

const usePostsForIndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMdx(
        filter: { frontmatter: { date: { ne: null } } }
        limit: 10
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
  let postsArray = [];
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
    postsArray.push(postObject);
    return postsArray;
  });
  return postsArray;
};

export default usePostsForIndexPage;
