import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

import {DUMMY_DATA} from '../data/data';
import Item from "./Item";

//this component is used for React-pdf library

// Create styles
const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  body: {
    border: 1,
    borderColor: "#8C1111",
    paddingVertical: 10,
    paddingHorizontal:10,
  },
});

const MyDocument = () => (
  <Document>
    <Page wrap size="letter" style={styles.main}>
      <Header className="header"  />
      <View style={styles.body}>
        {DUMMY_DATA.map((item) => <Item
          key={item.id}
          strategy={item.strategy}
          category={item.category}
          description={item.description}
          effectiveness={item.effectiveness}
          mce={item.mce}
          mnp={item.mnp}
          mde={item.mde}
        />)}
      </View>
      <Footer className="footer"/>
    </Page>
  </Document>
);

export default MyDocument;
