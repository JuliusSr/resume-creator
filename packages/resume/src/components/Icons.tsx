import React from 'react';
import { Image, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import phone from '../resources/icons/phone_icon.png';
import email from '../resources/icons/email_icon.png';
import position from '../resources/icons/position_icon.png';

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

const PositionIcon = ({style}:InstanceIconProps) => (
  <Icon src={position} style={style} />
);

export default Icon;

export {
  PhoneIcon,
  EmailIcon,
  PositionIcon
}
