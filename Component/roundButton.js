import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { roundButtonStyle } from '../Style/style.js';
import PropTypes from 'prop-types';

export default class RoundButton extends Component
{
    render() {
      const { textColor = "black", text, background = "#1F9F5F", round = 20, underlayColor = "transparent" } = this.props;
      return(
          <TouchableHighlight
              underlayColor={underlayColor}
              style={
                  [roundButtonStyle.general,
                  {borderRadius: round, backgroundColor: background}]}
              onPress = { this.props.handleOnPress }
           >
              <Text style={[roundButtonStyle.text, {color: textColor}]}>{ text }</Text>
          </TouchableHighlight>
      );
    }
}


RoundButton.propTypes = {
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  round: PropTypes.number,
  handleOnPress: PropTypes.func.isRequired,
};
