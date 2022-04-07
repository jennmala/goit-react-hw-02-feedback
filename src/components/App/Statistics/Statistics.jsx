import React from "react";
import PropTypes from "prop-types";
import { StatWrap, StatItem, Number } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positiveFeedback = total > 0 ? ((good / total) * 100).toFixed(0) : 0;

  return (
    <StatWrap>
      <StatItem>
        Good: <Number>{good}</Number>
      </StatItem>
      <StatItem>
        Neutral: <Number>{neutral}</Number>
      </StatItem>
      <StatItem>
        Bad: <Number>{bad}</Number>
      </StatItem>
      <StatItem>
        Total: <Number>{total}</Number>
      </StatItem>
      <StatItem>
        Positive feedback: <Number>{positiveFeedback}%</Number>
      </StatItem>
    </StatWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
