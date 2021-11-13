import React from "react";
import "./main.scss";

import Title from "../../atoms/title/title";
import Paragraph from "../../atoms/paragraph/paragraph";
import Image from "../../atoms/image/image";
import Info from "../../components/info/info";

function Main() {
  return (
    <div className="mp-main">
      <div className="mp-main__header">
        <Title>Razvan Gavrila</Title>
        <Paragraph color="lightgrey">Front End Developer</Paragraph>
        <Image src="https://via.placeholder.com/150" />
      </div>
      <div className="mp-main__body">
        <Info />
      </div>
    </div>
  );
}

export default Main;
