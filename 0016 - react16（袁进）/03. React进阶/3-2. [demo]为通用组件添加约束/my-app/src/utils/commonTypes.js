import PropTypes from "prop-types";

const commonTypes = {
  children: PropTypes.node,
  groupDatas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default commonTypes;
