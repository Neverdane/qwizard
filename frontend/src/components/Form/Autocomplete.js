import React from "react";
import Select from "react-select/lib/Creatable";
import { components } from "react-select";
import PropTypes from "prop-types";
import theme from "../../theme/index";
import styled from "styled-components";
import Tag from "../Card/Tag";

const selectStyles = {
  container: () => ({
    flexGrow: 1,
    background: theme.colors.transparentDark,
    color: theme.colors.dark,
    fontSize: "1.3em",
    padding: "0.3em 1em",
    lineHeight: "normal"
  }),
  input: () => ({}),
  valueContainer: base => ({
    ...base,
    padding: "0.1em 0 0.1em"
  }),
  control: () => ({
    cursor: "text",
    width: "100%"
  }),
  indicatorsContainer: () => ({
    display: "none"
  }),
  placeholder: base => ({
    ...base,
    color: theme.colors.dark,
    opacity: 0.1
  }),
  multiValue: base => ({
    display: "flex"
  }),
  multiValueLabel: base => ({
    color: theme.colors.white,
    padding: "0.1em 0 0.15em"
  }),
  multiValueRemove: (base, { isFocused }) => ({
    ...base,
    svg: {
      width: "0.7em",
      height: "0.7em"
    },
    background: "transparent",
    opacity: isFocused ? 0.5 : 1,
    transition: "opacity 400ms",
    "&:hover": {
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.5
    },
    position: "relative",
    left: "0.2em",
    marginRight: "-0.3em"
  }),
  menu: base => ({
    ...base,
    backgroundColor: theme.colors.dark,
    width: "auto",
    minWidth: "15rem",
    fontSize: "1rem",
    margin: "0 0 0 .3rem",
    borderRadius: 0,
    marginLeft: "-.5rem",
    top: ".3rem"
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  option: (base, { isFocused }) => ({
    ...base,
    transition: "all 200ms",
    backgroundColor: isFocused ? theme.colors.primary : "transparent",
    color: isFocused ? theme.colors.dark : "rgba(255, 255, 255, 0.8)",
    "&:not(:first-child)": {
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    }
  })
};

const SelectContainer = styled(({ startAdornment, children, ...props }) => {
  return (
    <components.SelectContainer {...props}>
      {startAdornment}
      {children}
    </components.SelectContainer>
  );
})`
  position: relative;
  display: flex;
  &:after {
    content: "";
    background: ${props => props.theme.colors.blue};
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    display: block;
    left: 0;
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: scaleX(${props => (props.isFocused ? 1 : 0)});
  }
`;

const MultiValueContainer = props => (
  <Tag>
    <components.MultiValueContainer {...props} />
  </Tag>
);

export default class extends React.PureComponent {
  static propTypes = {
    options: PropTypes.array
  };

  renderSelectContainer = props => (
    <SelectContainer startAdornment={this.props.startAdornment} {...props} />
  );

  render() {
    return (
      <div style={this.props.style}>
        <Select
          isMulti
          styles={selectStyles}
          components={{
            SelectContainer: this.renderSelectContainer,
            MultiValueContainer
          }}
          {...this.props}
        />
      </div>
    );
  }
}
