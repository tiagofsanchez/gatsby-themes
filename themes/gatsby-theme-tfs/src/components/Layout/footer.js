/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import useAllCategories from "../../hooks/useAllCategories";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import MegaMenuHero from "../Layout/megaMenuHero";
import MegaMenuPosts from "../Layout/megaMenuPosts";

const SectionContainer = styled.div`
  display: grid;
  padding: 20px;
  height: min-content;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const Footer = () => {
  const categoriesArray = useAllCategories();
  const { blogPath, categoryPath } = useAcmeBlogConfig();

  return (
    <SectionContainer sx={{ variant: `layout.header` }}>
      <MegaMenuHero blogPath={blogPath} />
      {categoriesArray.map((category) => (
        <MegaMenuPosts
          key={category.fieldValue}
          category={category}
          blogPath={blogPath}
          categoryPath={categoryPath}
        />
      ))}
    </SectionContainer>
  );
};

export default Footer;
