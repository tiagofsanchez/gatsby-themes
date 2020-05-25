import React from "react";

const TagsListing = ({allTagsArray}) => {
    return (
    <div>
      <ul>
        {allTagsArray.map((tag) => (
          <li key={tag.fieldValue}>{tag.fieldValue}</li>
        ))}
      </ul>
    </div>
  );
};

export default TagsListing;
