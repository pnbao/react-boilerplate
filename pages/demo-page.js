import React from "react";
import Head from "next/head";
import DemoPagePage from "~/containers/DemoPagePage";
import {} from "~/containers/DemoPagePage/actions";
import Layout from "~/containers/Layout";
import defaultPage from "../hocs/defaultPage";
import Config from "~/config";

class DemoPage extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>{}</title>
        </Head>
        <DemoPagePage />
      </Layout>
    );
  }
}

export default defaultPage(["common", "demo-page"])(DemoPage);
