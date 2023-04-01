import React from "react";
import "./Container.scss";

export default function Container({ children }) {
  return (
    <>
      <div classNameName="container">{children}</div>
    </>
  );
}
