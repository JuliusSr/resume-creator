import React from 'react';
import { Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    marginBottom: 20,
  }
});

type PictureProps = {
  src?: string,
  round?: boolean,
}

const Picture = ({ 
  src,
  round
}: PictureProps) => {
  const style = round
    ? { ...styles.image, borderRadius: 100 } 
    : styles.image;
  return !src ? null : (
    <Image style={style} src={src} />
  );
}

export default Picture;
