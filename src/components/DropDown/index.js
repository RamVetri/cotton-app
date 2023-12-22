import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles, { customStyles } from "./styles";
import { Colors } from "../../utils/styles";
import { useField } from "formik";
import { useEffect, useState } from "react";

function InputDropDownField (props) {
  const {name, options, placeholder, value, containerStyle, icon} = props
  const [field, meta, helpers] = useField(name)
  const [ angle, setAngle ] = useState(false)
  const [focused, setFocused] = useState(false)
  const hasError = meta.touched && meta.error
  // console.log(meta.error)
  const {setValue} = helpers

  useEffect( ()=> {
    if(value)
      setValue(value)
  },[value])

  const handleChange = (option) => {
    setValue(option)
    // setAngle(false)
  }

  const handleTrigger = () => {
    setAngle(true)
  }

  return(
    <Menu style={[styles.container,containerStyle && containerStyle]}>
      <MenuTrigger style={styles.field} onPress={handleTrigger}>
        {icon && <Icon style={styles.icon} name={icon} size={20} />}
        <View style={[styles.input, angle ? styles.focused : null, hasError && styles.error]}>
          <Text style={[styles.inputText,field.value && {color:Colors.black,}]}>{field.value || placeholder}</Text>
          <Icon name="keyboard-arrow-down" color={Colors.black} size={25} />
        </View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={[styles.wrapperStyles, icon && {marginLeft:30,}]}>
        {options.map((opt)=>{
          const options = typeof(opt)== 'string' ? opt : String(opt)
          return(
            <MenuOption 
              customStyles={customStyles} 
              key={options} text={options} 
              value={options} 
              onSelect={ () => handleChange(opt) }
            />
          )
        })}
      </MenuOptions>
      { hasError ?
        <Text style={[styles.errorText,icon && {paddingLeft:28} ]}>{ meta.error }</Text> : null
      }
    </Menu>
  )
}

InputDropDownField.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  containerStyle: PropTypes.object,
  icon: PropTypes.string,
}

export default InputDropDownField;
