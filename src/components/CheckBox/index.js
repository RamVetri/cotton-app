import React, {useMemo, useCallback} from 'react'
import PropTypes from 'prop-types'
// import IconFA from 'react-native-vector-icons/FontAwesome'
import {useField} from 'formik'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 8,
  },
  touchable: {
    marginTop: 4,
    marginBottom: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  optionLabel: {
    color: 'black',
    lineHeight: 16,
    marginLeft: 8,
  },
})

function Checkbox(props) {
  const { name } = props
  const [field, meta, helpers] = useField(name)
  const {value} = field
  const handlePress = useCallback( () => {
    helpers.setValue(!value)
  },[value])
  
  const hasError = meta.touched && meta.error
  const containerStyle = useMemo(
    () =>
      StyleSheet.compose(styles.container, [
        {
          backgroundColor: hasError ? '#ffb5b9' : undefined,
        },
        props.style,
      ]),
    [hasError, props.style],
  )

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <View style={styles.content}>
          {value ? (
            <Icon color={Colors.button} name="check-box" size={25} />
          ) : (
            <Icon color={Colors.disabled} size={25} name="check-box-outline-blank" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Checkbox
