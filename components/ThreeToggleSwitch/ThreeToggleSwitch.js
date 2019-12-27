import React, { Component } from "react";

import {
  Switch,
  SwitchLabel,
  SwitchRadio,
  SwitchSelection
} from "components/ThreeToggleSwitch/toggleStyle.js";

const titleCase = str =>
  str
    .split(/\s+/)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");

const ClickableLabel = ({ title, onChange, id }) => (
  <SwitchLabel onClick={event => onChange(event, title)} className={id} id={id} val={title}>
    {titleCase(title)}
  </SwitchLabel>
);

const ConcealedRadio = ({ value, selected }) => (
  <SwitchRadio type="radio" name="switch" defaultChecked={selected === value} />
);

class ThreeToggleSwitch extends Component {
  state = { selected: this.props.selected };

  combineMethods = (event, val) => {
    this.handleChange(val);
    this.props.dispatch({ type: "toggle" })
  };

  handleChange = val => {
    event.preventDefault();
    this.setState({ selected: val });
  };

  selectionStyle = () => {
    return {
      left: `${(this.props.values.indexOf(this.state.selected) / 3) * 100}%`
    };
  };

  render() {
    const { selected } = this.state;
    const { id } = this.props;
    return (
      <Switch>
        {this.props.values.map((val, index) => {
          return (
            <span key={index}>
              <ConcealedRadio value={val} selected={selected} />
              <ClickableLabel
                title={val}
                key={id}
                id={id}
                onChange={(event, val) => this.combineMethods(event, val)}
              />
            </span>
          );
        })}
        <SwitchSelection style={this.selectionStyle()} />
      </Switch>
    );
  }
}

export default ThreeToggleSwitch;
