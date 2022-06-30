import PropTypes from "prop-types";

const taskType = {
  name: PropTypes.string.isRequired,
  isFinish: PropTypes.bool.isRequired,
};

export default taskType;