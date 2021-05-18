import React from 'react';

import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    borderTop: 1,
    borderTopColor: "#8C1111",
    paddingVertical: 4,
  },
  footerLogo: {
    width: 20,
    height: 20,
  },
  footerText: {
    color: "#8C1111",
  },
});

const Footer = () => {
    return (
      <View style={styles.main} fixed>
        <Image
          style={[styles.footerLogo, { alignItems: "center" }]}
          src={process.env.PUBLIC_URL + "/logo.jpg"}
        />
        <Text style={[styles.footerText, { alignItems: "center" }]}>
          Cytomate &copy; 2021
        </Text>
        <Text
          style={{ color: "#8C1111" }}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} - ${totalPages}`
          }
          fixed
        />
      </View>
    );
}

export default Footer
