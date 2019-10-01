import React from "react";
import Config from "~/config";
import withI18next from "~/../hocs/_withI18next";
import styled from "./DemoComponent.style";

@withI18next()
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    );
  }
}

export default DemoComponent;
