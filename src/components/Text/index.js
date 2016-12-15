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
      classNames,
      children
    } = this.props;

    const styleObjs = stylePropsParser(classNames, styles);

    return (
      <div onClick={this.handleOnPress.bind(this)} className={styleObjs}>
        {content || children}
      </div>
    );
  }
}

Text.propTypes = {
  classNames: string,
  onPress: func,
  content: string,
  children: node,
};
