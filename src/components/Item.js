// one column of data in table is item this component for that item
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    display: "row",
    width: "100%",
    fontSize: 12
  },
  singleItem: {
    backgroundColor: "#8C1111",
    color: "#FFF",
    paddingVertical: 4,
      borderRadius: 6,
    paddingHorizontal:4
    },
    paragraph: {
        marginVertical: 4,
        textAlign:'justify'
    }
});

const Item = ({
  strategy,
  category,
  description,
  effectiveness,
  mce,
  mnp,
  mde,
}) => {
  return (
    <View style={{margin:0,padding:0}}>
      <View style={styles.item} break>
        <Text style={styles.singleItem}>
          Strategy
        </Text>
        <Text style={styles.paragraph}>
          {strategy}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.singleItem}>
          Category
        </Text>
        <Text style={styles.paragraph}>
          {category}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.singleItem}>
          Effectiveness
        </Text>
        <Text style={styles.paragraph}>
          {effectiveness}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.singleItem}>
          Miligate Code Execution
        </Text>
        <Text style={styles.paragraph}>
          {mce}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.singleItem}>
          Miligate Network Propogation
        </Text>
        <Text style={styles.paragraph}>
          {mnp}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.singleItem}>
          Miligate Data Exfitration
        </Text>
        <Text style={styles.paragraph}>
          {mde}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.singleItem}>
          Description
        </Text>
        <Text style={styles.paragraph}>
          {description}
        </Text>
          </View>
    </View>
  );
};

export default Item;
