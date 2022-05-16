import React from "react";
//import Navbar from "../Components/Navbar";

//<Navbar pageName={props.pagePath} />
const RenderPage = (props) => {
  const Page = props.page;
  if (props.isPrivate) {
    return (
      <>       
        <Page />
      </>
    );
  }
  return <Page />;
};

export default RenderPage;
