import { FeedbackOptions } from "components/App/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/App/Statistics/Statistics";
import { Section } from "components/App/Section/Section";
import { Notification } from "components/App/Notification/Notification";

import { Container } from "./App.styled";
import React, { Component } from "react";

export class App extends Component {
  // static defaultProps = {
  //   initialValueGood: 0,
  // }

  // static propTypes = {
  // }

  state = {
    // good: this.props.initialValueGood,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = (e) => {
    const name = e.currentTarget.name;

    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodClick={this.onButtonClick}
            onNeutralClick={this.onButtonClick}
            onBadClick={this.onButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
