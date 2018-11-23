import React from 'react';
import styled  from 'styled-components';
import Color  from 'color';


export const Colors = {
  blue: Color('#2D85FB'),
  white: Color('#ffffff'),
  green: Color('#00C596'),
  red: Color('#EC4068'),
  yellow: Color('#FCA200'),
  transparent: Color('#000000').fade(1),
  black: {
    c900: Color('#07090A'),
    c800: Color('#1F262D'),
    c700: Color('#283038'),
    c600: Color('#454D54'),
    c500: Color('#525A62'),
    c400: Color('#616871'),
    c300: Color('#7E8690'),
    c200: Color('#969EA8'),
    c100: Color('#A5ADB5'),
  },
  grey: {
    c900: Color('#8C93A0'),
    c800: Color('#9CA4B1'),
    c700: Color('#A7AFBC'),
    c600: Color('#B5BBC6'),
    c500: Color('#CBCFD7'),
    c400: Color('#E1E4E9'),
    c300: Color('#F1F2F5'),
    c200: Color('#F8F9FB'),
    c100: Color('#FCFCFD'),
  },
}
const HeaderStyle = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: ${Colors.black.c800.hex()};
  letter-spacing: 0.5px;
  line-height: 28px;
`;
