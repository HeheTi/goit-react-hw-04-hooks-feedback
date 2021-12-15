import { useState } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const makeUpState = nameKey =>
    setStatistics(prevState => ({
      ...prevState,
      [nameKey]: prevState[nameKey] + 1,
    }));

  const countTotalFeedback = () =>
    Object.values(statistics).reduce((acc, item) => acc + item, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((statistics.good / countTotalFeedback()) * 100);

  const showStatistic = () => {
    if (countTotalFeedback() === 0) {
      return <Notification message="There is no feedback" />;
    } else {
      return (
        <Statistics
          statistics={statistics}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      );
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={statistics} onLeaveFeedback={makeUpState} />
      </Section>

      <Section title="Statistics">{showStatistic()}</Section>
    </>
  );
};

export default App;
