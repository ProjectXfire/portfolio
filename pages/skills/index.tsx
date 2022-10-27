import React from "react";
import { GetServerSidePropsContext } from "next/types";
// External libraries
import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Components
import { Layout, TitleWithLine } from "@/modules/shared/components";
import { Skills, Certificates } from "@/modules/portfolio/components";

export async function getStaticProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
}

const SkillsPage = () => {
  //******** Hooks ********//

  const { t } = useTranslation("common");

  //******** Renders ********//

  return (
    <Layout title="Skills" name="skills" content="my skills and cetificates">
      <Box sx={{ mb: 4 }}>
        <TitleWithLine title={t("title_4")} />
        <Skills />
        <TitleWithLine title={t("title_5")} />
        <Certificates />
      </Box>
    </Layout>
  );
};

export default SkillsPage;
