import PropTypes from 'prop-types';
import Button from '../Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const normalizeName = name =>
    name
      .split(' ')
      .map(word => {
        const firstUpCaseLetter = word.charAt(0).toUpperCase();
        const anoterLetter = word.substring(1);
        return `${firstUpCaseLetter}${anoterLetter}`;
      })
      .join(' ');

  return (
    <>
      {Object.keys(options).map(item => (
        <Button key={item} onClick={() => onLeaveFeedback(item)}>
          {normalizeName(item)}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
