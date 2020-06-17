import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
export default function App() {
  return (
    <View style={styles.container}>
  <Text>Bezier Line Chart</Text>
  <BarChart

  style={graphStyle}
  data={data}
  width={300}
  height={220}
withHorizontalLabels={false}
  chartConfig={chartConfig}
  withInnerLines={false}
  showValuesOnTopOfBars
/>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `red`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 1.5,
  useShadowColorFromDataset: false // optional


};
const data = {
  labels: ["17/06","16/06","15/06"],
  datasets: [
    {
      data: [20, 45, 28]
    }
  ]
};
const graphStyle ={
    justifyContent: 'center', 
    alignItems: 'center', 
    flex:1, 
  };