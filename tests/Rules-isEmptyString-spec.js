import React from 'react';
import TestUtils from 'react-addons-test-utils';
import createClass from 'create-react-class';

import Formsy from './..';
import { InputFactory } from './utils/TestInput';

const TestInput = InputFactory({
  render() {
    return <input value={this.getValue()} readOnly/>;
  }
});

const TestForm = createClass({
  render() {
    return (
      <Formsy.Form>
        <TestInput name="foo" validations="isEmptyString" value={this.props.inputValue}/>
      </Formsy.Form>
    );
  }
});

export default {

  'should pass with a default value': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), false);
    test.done();

  },

  'should fail with non-empty string': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm inputValue="abc"/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), false);
    test.done();

  },

  'should pass with an empty string': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm inputValue=""/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), true);
    test.done();

  },

  'should fail with undefined': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm inputValue={undefined}/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), false);
    test.done();

  },

  'should fail with null': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm inputValue={null}/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), false);
    test.done();

  },

  'should fail with a number': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm inputValue={42}/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), false);
    test.done();

  },

  'should fail with a zero': function (test) {

    const form = TestUtils.renderIntoDocument(<TestForm inputValue={0}/>);
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput);
    test.equal(inputComponent.isValid(), false);
    test.done();

  }

};
