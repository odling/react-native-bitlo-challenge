import React from 'react';
import {TouchableHighlight, TouchableHighlightProps, View} from 'react-native';
import {IColors} from '../../constants/Theme';
import {layout} from '../../constants/Layout';
import {useTheme} from '../../hooks/useTheme';

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof   typeof layout.spacing;
  paddingBottom?: keyof typeof layout.spacing;
  paddingTop?: keyof typeof layout.spacing;
  paddingLeft?: keyof typeof layout.spacing;
  paddingRight?: keyof typeof layout.spacing;
  paddingVertical?: keyof typeof layout.spacing;
  paddingHorizontal?: keyof typeof layout.spacing;
  paddingEnd?: keyof typeof layout.spacing;
  paddingStart?: keyof typeof layout.spacing;
  margin?: keyof typeof layout.spacing;
  marginBottom?: keyof typeof layout.spacing;
  marginTop?: keyof typeof layout.spacing;
  marginLeft?: keyof typeof layout.spacing;
  marginRight?: keyof typeof layout.spacing;
  marginVertical?: keyof typeof layout.spacing;
  marginHorizontal?: keyof typeof layout.spacing;
  marginEnd?: keyof typeof layout.spacing;
  marginStart?: keyof typeof layout.spacing;
  enabledColor?: keyof IColors;
  disabledColor?: keyof IColors
}

const HighlightBox = ({
  style,
  padding,
  paddingBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  paddingEnd,
  paddingStart,
  margin,
  marginBottom,
  marginTop,
  marginRight,
  marginLeft,
  marginHorizontal,
  marginVertical,
  marginEnd,
  marginStart,
  enabledColor,
  disabledColor,
  disabled,
  ...rest
}: BoxProps & TouchableHighlightProps) => {
  const colors = useTheme();

  return (
    <TouchableHighlight
      style={[
        padding && {padding: layout.spacing[padding]},
        paddingBottom && {paddingBottom: layout.spacing[paddingBottom]},
        paddingTop && {paddingTop: layout.spacing[paddingTop]},
        paddingLeft && {paddingLeft: layout.spacing[paddingLeft]},
        paddingRight && {paddingRight: layout.spacing[paddingRight]},
        paddingHorizontal && {
          paddingHorizontal: layout.spacing[paddingHorizontal],
        },
        paddingVertical && {paddingVertical: layout.spacing[paddingVertical]},
        paddingStart && {paddingStart: layout.spacing[paddingStart]},
        paddingEnd && {paddingEnd: layout.spacing[paddingEnd]},
        margin && {margin: layout.spacing[margin]},
        marginBottom && {marginBottom: layout.spacing[marginBottom]},
        marginTop && {marginTop: layout.spacing[marginTop]},
        marginLeft && {marginLeft: layout.spacing[marginLeft]},
        marginRight && {marginRight: layout.spacing[marginRight]},
        marginHorizontal && {
          marginHorizontal: layout.spacing[marginHorizontal],
        },
        marginVertical && {marginVertical: layout.spacing[marginVertical]},
        marginStart && {marginStart: layout.spacing[marginStart]},
        marginEnd && {marginEnd: layout.spacing[marginEnd]},
        enabledColor && !disabled && {
          backgroundColor: colors[enabledColor],
        },
        disabledColor && disabled && {
          backgroundColor: colors[disabledColor]
        },
        style,
      ]}
      disabled={disabled}
      {...rest}
    />
  );
};

export default HighlightBox;
