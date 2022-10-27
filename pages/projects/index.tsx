import React from "react";
import { GetServerSidePropsContext } from "next/types";
// External libraries
import { Box, Fade } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
// Components
import { Layout, TitleWithLine } from "@/modules/shared/components";
import { Projects } from "@/modules/portfolio/components";

export async function getStaticProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
}

const ProjectsPage = () => {
  //******** Hooks ********//

  const { t } = useTranslation("common");

  //******** Renders ********//

  return (
    <Layout title="Projects" name="projects" content="my projects">
      <Fade in={true} timeout={500}>
        <Box>
          <TitleWithLine title={t("title_3")} />
          <Projects />
        </Box>
      </Fade>
    </Layout>
  );
};

export default ProjectsPage;
