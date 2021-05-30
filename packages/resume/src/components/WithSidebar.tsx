import React, { ReactNode } from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

const thickness = 5;
const barWidth = Math.floor(thickness / 2);
const markerOffset = (thickness / 2) - (barWidth / 2);

//TODO configurable sidebar color(s)
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: markerOffset
  },
  sidebar: {
    marginTop: 3,
    width: barWidth,
    backgroundColor: "#CCCCCC",
    borderRadius: 30,
    marginRight: 10,
  },
  marker: {
    left: -markerOffset,
    backgroundColor: "#CCCCCC",
    height: thickness,
    width: thickness,
    borderRadius: 100,
  },
});

type SidebarProps = {
  style?: Style,
  noMarker?: boolean
};

const SideBar = ({
  style,
  noMarker
}: SidebarProps) => {
  return (
    <View style={[styles.sidebar, {...style}]}>
      {!noMarker && <Text style={styles.marker} />}
    </View>
  );
}

type WithSidebarProps = {
  children: ReactNode
  style?: Style,
  contentStyle?: Style,
  sidebarStyle?: Style,
  active?: boolean,
  noMarker?: boolean
};

const WithSidebar = ({
  children,
  style,
  contentStyle,
  sidebarStyle,
  active,
  noMarker
}: WithSidebarProps) => {
  if (!active) {
    return (
      <View style={style}>
        {children}
      </View>
    );
  }
  return !children ? null : (
    <View style={[styles.container, {...style}]}>
      <SideBar style={sidebarStyle} noMarker={noMarker} />
      <View style={contentStyle}>
        {children}
      </View>
    </View>
  );
}

export default WithSidebar;
