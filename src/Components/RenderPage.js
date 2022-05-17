import React from "react";
import Copyright from "./Copyright";
import Navbar from "./Navbar";

//<Navbar pageName={props.pagePath} />
const RenderPage = (props) => {
  const Page = props.page;
  if (props.isPrivate) {
    return (
      <> <Navbar/>      
        <Page />
        <Copyright/>
      </>
    );
  }
  return <Page />;
};

export default RenderPage;
