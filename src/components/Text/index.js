import React, { Component, PropTypes } from 'react';
import styles from './Text.scss';
import { stylePropsParser } from '../../utilities/index.js'

const { string, object, func, node } = PropTypes;

export default class Text extends Component {

  handleOnPress(event) {
    if (this.props.onPress)
      this.props.onPress(event);
  }

  render() {
    const {
      content,
      onPress,
      children
    } = this.props;

    return (
      <div onClick = {()=>this.handleOnPress()}>
        {content || children}
      </div>
    );
  }
}

Text.propTypes = {
  onPress: func,
  content: string,
  children: node,
};
