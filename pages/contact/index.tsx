import React from "react";
import { GetServerSidePropsContext } from "next/types";
// External libraries
import { Box, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Components
import { Layout, TitleWithLine } from "@/modules/shared/components";
import { ContactMe, ContactData } from "@/modules/portfolio/components";

export async function getStaticProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
}

const ContactPage = () => {
  //******** Hooks ********//

  const { t } = useTranslation("common");

  //******** Renders ********//

  return (
    <Layout title="Contact" name="contact" content="contact me">
      <Box>
        <TitleWithLine title={t("title_6")} />
        <Grid container spacing={3}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 1,
            }}
            item
            xs={12}
            sm={6}
            md={5}
          >
            <ContactData />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <ContactMe />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ContactPage;
