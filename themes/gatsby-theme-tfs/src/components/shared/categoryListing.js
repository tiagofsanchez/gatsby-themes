/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from '@emotion/styled'; 

const Flex = styled.div`
display: flex; 
flex-wrap: wrap;
justify-content: center;
`

const _ = require("lodash");

const CatListing = ({ categoriesArray, categoryPath, blogPath }) => {
  return (
    <Flex>
      {categoriesArray.map((cat) => (
        <Link
          key={cat.fieldValue}
          to={`${blogPath}${categoryPath}/${_.kebabCase(cat.fieldValue)}`}
          aria-label={`${cat.fieldValue} category`}
          sx={{variant: `links.secondary`}}
        >
          <Card variant="category">
            <h3 sx={{ color: `white`, my: `0px` }}>{cat.fieldValue}</h3>
          </Card>
        </Link>
      ))}
    </Flex>
  );
};

export default CatListing;
