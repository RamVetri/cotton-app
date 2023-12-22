import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Text, View, TextInput, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import { Colors } from 'utils/styles'; 

const FormikTextInput = ({ name, icon, setVisible, style, containerStyle, value, ...rest }) => {
  const [field, meta, helpers] = useField(name)
  const [focused, setFocused] = useState(false)
  const hasError = meta.touched && meta.error
  const {setValue} = helpers
  
  useEffect( ()=> {
    if(value){
      setValue(typeof(value) == 'number'? value.toString() : value)
    }
  },[value])

  const handleFocus = useCallback(() => {
    setFocused(true)
  })
  const handleBlur = useCallback((args) => {
    setFocused(false)
    const onBlur = field.onBlur(name)
    onBlur(args)
  })

  return (
    <View style={[styles.container,containerStyle && containerStyle]}>
      <View style={styles.field}>
        {icon && <Icon style={styles.icon} name={icon} size={20} />}
        {/* <Pressable style={{width:'100%'}} onPress={() => setVisible(true)}> */}
          <TextInput
            {...rest}
            value={field.value}
            onChangeText={field.onChange(name)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor={Colors.gray}
            style={[styles.input, style, focused ? styles.focused : null, hasError && styles.error]}
          />
        {/* </Pressable> */}
      </View>
        { hasError
          ? <Text style={[styles.errorText,icon && {paddingLeft:28} ]}>{ meta.error }</Text>
          : null
        }
    </View>
  )
}

FormikTextInput.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  setVisible: PropTypes.func,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  value: PropTypes.any,
}

export default FormikTextInput