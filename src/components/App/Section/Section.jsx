import React from "react";
import PropTypes from "prop-types";
import { SectionWrap, SectionTitle } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};
