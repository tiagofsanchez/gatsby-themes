/** @jsx jsx */
import { jsx, Close } from "theme-ui";
import styled from "@emotion/styled";

import useAllCategories from "../../hooks/useAllCategories";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import MegaMenuHero from "../Layout/megaMenuHero";
import MegaMenuPosts from "../Layout/megaMenuPosts";

const MegaMenuContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 100px;
  left: 0px;
  width: 100%;
  height: auto;
  background: rgba(15, 14, 71, 0.3);
  backdrop-filter: blur(20px) brightness(50%) saturate(20%);
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const MegaMenu = ({ closeMenu }) => {
  const categoriesArray = useAllCategories();
  const { blogPath, categoryPath } = useAcmeBlogConfig();

  return (
    <MegaMenuContainer sx={{ borderColor: `highlight` }}>
      <Close
        sx={{
          position: `absolute`,
          right: `0px`,
          mt: 2,
          mr: 2,
          color: `highlight`,
          cursor: `pointer`,
        }}
        onClick={closeMenu}
      />
      <SectionContainer sx={{ variant: `layout.header`, py: 5 }}>
        <MegaMenuHero closeMenu={closeMenu} blogPath={blogPath} />
        {categoriesArray.map((category) => (
          <MegaMenuPosts
            key={category.fieldValue}
            category={category}
            closeMenu={closeMenu}
            blogPath={blogPath}
            categoryPath={categoryPath}
          />
        ))}
      </SectionContainer>
    </MegaMenuContainer>
  );
};

export default MegaMenu;
