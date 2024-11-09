import React from "react";
import HeaderSection from "../header/HeaderSection";
import FooterSection7 from "../footer/FooterSection7";
type Props = {
  children: React.ReactNode;
};
const InnerLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderSection innerHeader />
      {children}
      <FooterSection7 />
    </>
  );
};

export default InnerLayout;
