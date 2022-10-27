import React, { FC, ReactNode } from "react";
import Head from "next/head";
// External libraries
import { Container } from "@mui/system";
// Components
import { Navbar } from "./cNavbar";
import { Sidebar } from "./cSidebar";

interface Props {
  children: ReactNode;
  title: string;
  name: string;
  content: string;
}

export const Layout: FC<Props> = ({ children, title, name, content }) => {
  //******** Renders *********//

  return (
    <Container sx={{ p: "0px !important" }} maxWidth="xl">
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </Container>
  );
};
