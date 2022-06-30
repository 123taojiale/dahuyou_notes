import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";

export default function withDataGroup(Comp) {
  return class GroupWrapper extends Component {
    static protoTypes = {
      datas: commonTypes.groupDatas.isRequired,
      onChange: PropTypes.func.isRequired,
    };

    render() {
      const CompGroup = this.props.datas.map((it, i) => (
        <Comp data={it} key={i} {...this.props} />
      ));
      return <>{ CompGroup }</>;
    }
  };
}
