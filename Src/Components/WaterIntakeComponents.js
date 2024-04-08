import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions ,Alert } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Dropdown } from "react-native-element-dropdown";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Button , Switch} from 'react-native-paper';
const { width } = Dimensions.get("window");

const cupData = [
  { label: "100 ml", value: 100 },
  { label: "250 ml", value: 250 },
  { label: "400 ml", value: 400 },
  { label: "500 ml", value: 500 },
  { label: "1000 ml", value: 1000 },
];

const goalData = [
  { label: "1000 ml", value: 1000 },
  { label: "2400 ml", value: 2400 },
  { label: "3000 ml", value: 3000 },
  { label: "5000 ml", value: 5000 },
  { label: "8000 ml", value: 8000 },
  { label: "10000 ml", value: 10000 },
];

const IntervalData = [
  { label: "15 min", value: 15 },
  { label: "30 min", value: 30 },
  { label: "1 hour", value: 60 },
  { label: "1.5 hour", value: 90 },
  { label: "2 hour", value: 120 },
  { label: "2.5 hour", value: 150 },
];

export const WaterIntakeCircle = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {setIsSwitchOn(!isSwitchOn); Alert.alert('reminder set', 'drink water stay fit')}
  return(
  <View style={styles.progressContainer}>
  <View style={{flex:8, borderColor:'black'}}>
    <CircularProgress
      value={400}
      radius={width * 0.33}
      duration={1500}
      progressValueColor={"black"}
      progressValueStyle={{ fontSize: width * 0.12, opacity: 0.7 }}
      maxValue={2400}
      title={"ml / 2400 ml"}
      titleColor={"black"}
      titleStyle={{
        fontWeight: "bold",
        fontSize: width * 0.05,
        opacity: 0.7,
      }}
      activeStrokeWidth={width * 0.05}
      inActiveStrokeWidth={width * 0.015}
      activeStrokeColor={"#2E3192"}
      activeStrokeSecondaryColor={"#1BFFFF"}
      
    />
    </View>
    <View style={{flex:2 , borderColor:'black',  justifyContent:'space-around', alignItems:'center', display:'flex', flexDirection:'row',width: width * 0.75}}>
      <Text style={styles.cupCapacityText}>set reminder</Text>
    <Switch color="#2E3192"  value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
   
  </View>)
};

export const WaterSelectorBox = () => {
  const [cupCapacity, setCupCapacity] = useState(100);
  const [goal, setGoal] = useState(2400);
  const [interval, SetInterval] = useState(15);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
 
  const showStartTimePicker = () => {
    DateTimePickerAndroid.open({
      value: startTime,
      onChange: (event, selectedDate) => {
        if (selectedDate) {
          setStartTime(selectedDate);
        }
      },
      mode: 'time',
      is12Hour: true,
    });
  };

  const showEndTimePicker = () => {
    DateTimePickerAndroid.open({
      value: endTime,
      onChange: (event, selectedDate) => {
        if (selectedDate) {
          setEndTime(selectedDate);
        }
      },
      mode: 'time',
      is12Hour: true,
    });
  };

  return (
    <View style={styles.WaterSelectorBox}>
      <View style={styles.ReminderSettingsBox}>
        <Text style={styles.cupCapacityText}>Cup capacity</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          data={cupData}
          searchPlaceholder="Search..."
          labelField={"label"}
          activeColor="#DCDCDD"
          itemContainerStyle={{ backgroundColor: "#DCDCDD" }}
          onChange={(item) => setCupCapacity(item.value)}
        />
      </View>
      <View style={styles.ReminderSettingsBox}>
        <Text style={styles.cupCapacityText}>Drinking goal</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          data={goalData}
          searchPlaceholder="Search..."
          labelField={"label"}
          activeColor="#DCDCDD"
          itemContainerStyle={{ backgroundColor: "#DCDCDD" }}
          onChange={(item) => setGoal(item.value)}
        />
      </View>
      <View style={[styles.ReminderSettingsBox, {justifyContent:'center', gap:width*0.01}]}>
        <Text style={styles.cupCapacityText}>start-time</Text>

      <Button mode="contained" labelStyle={{fontSize:width*0.026}}  onPress={showStartTimePicker} style={{width:width*0.25,  backgroundColor:'#2E3192'}} >
      {`${startTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })}`}
    
  </Button>
  <Text style={styles.cupCapacityText}>end-time</Text>
  <Button mode="contained" labelStyle={{fontSize:width*0.026}}  onPress={showEndTimePicker} style={{width:width*0.25,marginRight:width*0.02, backgroundColor:'#2E3192'}}>
      {`${endTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })}`}
  </Button>

      </View>
    
      <View style={styles.ReminderSettingsBox}>
        <Text style={styles.cupCapacityText}>Interval</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          data={IntervalData}
          searchPlaceholder="Search..."
          labelField={"label"}
          activeColor="#DCDCDD"
          itemContainerStyle={{ backgroundColor: "#DCDCDD" }}
          onChange={(item) => SetInterval(item.value)}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 5,
    width: width * 0.75,
    justifyContent: "center",
    alignItems: "center",
    borderColor:'black',
    
    display:'flex',
    flexDirection:'column',
    
    
  },
  WaterSelectorBox: {
    flex: 5,
    width: width*0.97,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius:20,
    // marginBottom:width*0.05
    backgroundColor:'#ABC0D8',
    borderTopRightRadius:20
  },
  ReminderSettingsBox: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
  //  borderWidth:0.5
  borderTopRightRadius:20
    
  },
  cupCapacityText: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    marginLeft: width * 0.03,
    opacity: 0.8,
  },
  dropdownContainer: { height: width * 0.4, width: width * 0.4 },
  dropdown: { width: width * 0.4, marginRight: width * 0.04 },


});