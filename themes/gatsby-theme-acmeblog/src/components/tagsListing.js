import React from "react";
import { Card, Badge, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";


import useAcmeBlogConfig from '../hooks/useAcmeBlogConfig';

const _ = require("lodash");
const Flex = styled.div`
  display: flex;
`;

const TagsListing = ({ allTagsArray }) => {
  const { blogPath, tagsPath} = useAcmeBlogConfig()

  return (
    <div>
      <Flex>
        {allTagsArray.map((tag) => (
          <>
            <TLink
              key={tag.fieldValue}
              as={Link}
              sx={{ variant: `links.secondary` }}
              to={`${blogPath}${tagsPath}/${_.kebabCase(tag.fieldValue)}`}
            >
              <Card variant="tag" sx={{ marginRight: `-10px` }}>
                <h4>{tag.fieldValue}</h4>
              </Card>
            </TLink>
            <div>
              <Badge variant="number">{tag.totalCount}</Badge>
            </div>
          </>
        ))}
      </Flex>
    </div>
  );
};

export default TagsListing;
