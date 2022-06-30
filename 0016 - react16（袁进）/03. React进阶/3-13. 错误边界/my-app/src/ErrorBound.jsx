import PropTypes from "prop-types";
import { PureComponent } from "react";

export default class ErrorBound extends PureComponent {
  static propTypes = { children: PropTypes.object.isRequired };

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    console.log('getDerivedStateFromError');
    return {
      hasError: true,
    };
  }

  componentDidCatch (error, info) {
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <ul>
      <li>后代组件中有渲染出错的</li>
    </ul>;
    } else {
      return this.props.children;
    }
  }
}
