import React from "react";
import PropTypes from "prop-types";
import { ButtonList, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => (
  <ButtonList>
    <Button type="button" name="good" onClick={onGoodClick}>
      Good
    </Button>
    <Button type="button" name="neutral" onClick={onNeutralClick}>
      Neutral
    </Button>
    <Button type="button" name="bad" onClick={onBadClick}>
      Bad
    </Button>
  </ButtonList>
);

FeedbackOptions.propTypes = {
  onGoodClick: PropTypes.func.isRequired,
  onNeutralClick: PropTypes.func.isRequired,
  onBadClick: PropTypes.func.isRequired,
};
