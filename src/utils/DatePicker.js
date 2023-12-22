import React from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const DatePicker = ({name, setFieldValue, setDate, visible, setVisible}) => {

  const hideDatePicker = () => {
    setVisible(false)
  };

  const handleConfirm = (date) => {
    let tempDate = new Date(date)
    let fDate =  tempDate.getFullYear() + ' - ' + (tempDate.getMonth() + 1 ) + ' - ' + tempDate.getDate() ;
    // console.log(fDate)
    setDate(fDate)
    // setFieldValue(name, fDate)
    hideDatePicker();
  };
  return (
    <View>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};