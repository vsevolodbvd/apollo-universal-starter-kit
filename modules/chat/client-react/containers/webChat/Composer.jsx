import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'reactstrap';

import { MIN_COMPOSER_HEIGHT, DEFAULT_PLACEHOLDER } from './Constant';
import Color from './Color';

export default class Composer extends React.Component {
  onChangeText(text) {
    this.props.onTextChanged(text.target.value);
  }

  render() {
    const { multiline, textInputStyle, composerHeight, textInputAutoFocus, text, placeholder } = this.props;
    return (
      <Input
        type={multiline ? 'textarea' : 'input'}
        style={{ ...styles.textInput, ...textInputStyle, height: composerHeight }}
        placeholder={placeholder}
        onChange={text => this.onChangeText(text)}
        value={text}
        autoFocus={textInputAutoFocus}
      />
    );
  }
}

const styles = {
  textInput: {
    marginLeft: '10px',
    fontSize: '16px',
    lineHeight: '16px',
    marginTop: '6px',
    marginBottom: '3px'
  }
};

Composer.defaultProps = {
  composerHeight: MIN_COMPOSER_HEIGHT,
  text: '',
  placeholderTextColor: Color.defaultProps,
  placeholder: DEFAULT_PLACEHOLDER,
  textInputProps: null,
  multiline: true,
  textInputStyle: {},
  textInputAutoFocus: false,
  keyboardAppearance: 'default',
  onTextChanged: () => {}
};

Composer.propTypes = {
  composerHeight: PropTypes.number,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  textInputProps: PropTypes.object,
  onTextChanged: PropTypes.func,
  onInputSizeChanged: PropTypes.func,
  multiline: PropTypes.bool,
  textInputStyle: PropTypes.object,
  textInputAutoFocus: PropTypes.bool,
  keyboardAppearance: PropTypes.string
};