import React, {Component} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

const options = ['good', 'neutral', 'bad'];

 export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback} />{' '}
          
  </Section>
      </div>
    );
  }
};
