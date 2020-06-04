/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import styled from "@emotion/styled";

const ContentContainer = styled.div`
  position: sticky;
  top: 4rem;
  margin-left: 20px;
  padding-left: 20px;
  height: fit-content;
  border: 1px solid;
  border-radius: 4px;
  flex: 1 1 20%;
  @media (max-width: 1100px) {
    display: none;
    position: none;
  }
`;
const Ul = styled.ul`
  padding-left: 0px;
`;

const Li = styled.li`
  list-style: none;
  padding-left: 5px;
  margin-bottom: 5px;
`;

//getting id's pelled form the array
// const getIds = (items) => {
//   return items.reduce((acc, item) => {
//     if (item.url) {
//       acc.push(item.url.slice(1));
//     }
//     if (item.items) {
//       acc.push(...getIds(item.items));
//     }
//     return acc;
//   }, []);
// };

const renderItems = (items) => {
  return (
    <Ul>
      {items.map((item) => (
        <Li key={item.title} >
          <Link
            href={`${item.url}`}
            sx={{
              textDecoration: `none`,
              borderBottom: `0px`,
              color: `primary`,
              ":hover": { color: `highlight` },
            }}
          >
            {item.title}
          </Link>
          {item.items && renderItems(item.items)}
        </Li>
      ))}
    </Ul>
  );
};

const postTableOfContents = ({ tableOfContentsArray }) => {
  return (
    <ContentContainer sx={{ borderColor: `highlight` }}>
      <h3>Table of contents</h3>
      {renderItems(tableOfContentsArray)}
    </ContentContainer>
  );
};

export default postTableOfContents;
