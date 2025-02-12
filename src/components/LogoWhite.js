import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoWhite = ({ size = 80 }) => (
<Svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <Path d="M12 2C12 2 4 10 4 16a8 8 0 0 0 16 0C20 10 12 2 12 2z" />
    <Path d="M12 21a5 5 0 0 1-5-5" />
  </Svg>

);


export default LogoWhite;
