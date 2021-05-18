import React from 'react';
import{
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    borderBottom: 1,
    borderBottomColor: "#8C1111",
    paddingVertical: 4,
    marginVertical: 5,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
  logoText: {
    color: "#8C1111",
  },
});

const Header = () => {
    return (
      <View style={styles.main} fixed>
        <Image
          style={[styles.logo, { alignItems: "center" }]}
          src={process.env.PUBLIC_URL + "/logo.jpg"}
        />
        <Text style={styles.logoText}>Cytomate</Text>
      </View>
    );
}

export default Header
