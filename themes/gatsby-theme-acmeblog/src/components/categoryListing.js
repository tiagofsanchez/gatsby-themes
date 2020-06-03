/** @jsx jsx */
import { jsx, Card, Flex } from "theme-ui";
import { Link } from "gatsby";

const _ = require("lodash");

const CatListing = ({ categoriesArray, categoryPath, blogPath }) => {
  return (
    <Flex>
      {categoriesArray.map((cat) => (
        <Link
          key={cat.fieldValue}
          to={`${blogPath}${categoryPath}/${_.kebabCase(cat.fieldValue)}`}
          sx={{borderBottom: 'none'}}
        >
          <Card variant="category">
            <h3 sx={{ color: `white` }}>{cat.fieldValue}</h3>
          </Card>
        </Link>
      ))}
    </Flex>
  );
};

export default CatListing;
