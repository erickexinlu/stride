import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function WalkerInterestCard() {
  return (
    <View style={{ width: '90%', height: 100, borderRadius: 30, backgroundColor: "#F1F2ED"}}>
      <Text>Walker Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WalkerInterestCard;
