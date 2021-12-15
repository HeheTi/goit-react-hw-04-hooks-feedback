import { Component } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  makeUpState = nameKey =>
    this.setState(prevState => ({ [nameKey]: prevState[nameKey] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    const showStatistic = () => {
      if (this.countTotalFeedback() === 0) {
        return <Notification message="There is no feedback" />;
      } else {
        return (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        );
      }
    };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.makeUpState} />
        </Section>
        <Section title="Statistics">{showStatistic()}</Section>
      </>
    );
  }
}

export default App;
