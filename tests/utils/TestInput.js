import React from 'react';
import createClass from 'create-react-class';
import Formsy from './../..';
import assign from 'react/lib/Object.assign';

const defaultProps = {
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return { type: 'text' };
  },
  updateValue(event) {
    this.setValue(event.target[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {
    return <input type={this.props.type} value={this.getValue()} onChange={this.updateValue}/>;
  }
};

export function InputFactory(props) {
  return createClass(assign(defaultProps, props));
}

export default createClass(defaultProps);
