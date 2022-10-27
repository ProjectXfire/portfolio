import type { GetServerSidePropsContext, NextPage } from "next";
// External libraries
import { Grid } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Components
import { Layout } from "@/modules/shared/components";
import { Profile, Hero } from "@/modules/portfolio/components";

export async function getStaticProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <Layout title="Home" name="home" content="about me">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12} md={9}>
          <Profile />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
