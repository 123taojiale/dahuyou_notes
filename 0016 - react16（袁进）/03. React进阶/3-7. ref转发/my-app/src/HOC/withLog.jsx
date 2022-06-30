import React from "react";

export default function withLogin(Comp) {
  class LogWrapper extends React.Component {
    componentDidMount() {
      console.log(`日志记录：${Comp.name}组件被创建了`);
    }
    componentWillUnmount() {
      console.log(`日志记录：${Comp.name}组件被销毁了`);
    }

    render() {
      const {
        abc,
        ...rest
      } = this.props;

      return <Comp {...rest} ref={abc} />;
    }
  };

  return React.forwardRef((props, ref) => {
    return <LogWrapper {...props} abc={ref} />
  })
}
