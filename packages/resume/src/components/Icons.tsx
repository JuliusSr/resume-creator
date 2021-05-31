import React from 'react';
import { Image, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
// import phone from '../resources/icons/phone_icon.png';
// import email from '../resources/icons/email_icon.png';
// import web from '../resources/icons/web_icon.png';
// import position from '../resources/icons/position_icon.png';

//FIXME loader fails on .png import when running in Node.js.
// As a temporary solution resume.Icons now imports Base64 icons.
// Should revert to using .png icons when a solution to the loading issue is found.
//
// @resume-creator/server-example: D:\development\resume-creator\packages\resume\build\resources\icons\phone_icon.png:1
// @resume-creator/server-example: �PNG
// @resume-creator/server-example: SyntaxError: Invalid or unexpected token
// @resume-creator/server-example:     at wrapSafe (internal/modules/cjs/loader.js:979:16)
// @resume-creator/server-example:     at Module._compile (internal/modules/cjs/loader.js:1027:27)
// @resume-creator/server-example:     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
// @resume-creator/server-example:     at Module.load (internal/modules/cjs/loader.js:928:32)
// @resume-creator/server-example:     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
// @resume-creator/server-example:     at Module.require (internal/modules/cjs/loader.js:952:19)
// @resume-creator/server-example:     at require (internal/modules/cjs/helpers.js:88:18)
// @resume-creator/server-example:     at Object.<anonymous> (D:\development\resume-creator\packages\resume\build\components\Icons.js:12:42)
// @resume-creator/server-example:     at Module._compile (internal/modules/cjs/loader.js:1063:30)
// @resume-creator/server-example:     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)

import {
  phone,
  email,
  web,
  position
} from '../resources/icons.json';

const styles = StyleSheet.create({
  icon: {
    width: 11,
  }
});

type IconProps = {
  src?: string,
  style?: Style
}

const Icon = ({ 
  src,
  style
}: IconProps) => {
  return !src ? null : (
    <Image 
      style={[styles.icon, {...style}]} 
      src={src} 
    />
  );
}

type InstanceIconProps = {
  style?: Style
}

const PhoneIcon = ({style}:InstanceIconProps) => (
  <Icon src={phone} style={style} />
);

const EmailIcon = ({style}:InstanceIconProps) => (
  <Icon src={email} style={style} />
);

const WebIcon = ({style}:InstanceIconProps) => (
  <Icon src={web} style={style} />
);

const PositionIcon = ({style}:InstanceIconProps) => (
  <Icon src={position} style={style} />
);

export default Icon;

export {
  PhoneIcon,
  EmailIcon,
  WebIcon,
  PositionIcon
}
