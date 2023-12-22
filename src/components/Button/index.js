import { StyleSheet, Text, TouchableOpacity } from "react-native"
import PropTypes from 'prop-types'
import { Colors } from "../../utils/styles"

const basic = StyleSheet.create({
  container:{
      alignItems:"center",
      justifyContent:"center",
      // borderWidth:1,
    },
    text:{
      color:Colors.white,
      textTransform:'uppercase',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:16
    },
})

function ButtonComponent(props) {

    const {onPress, style, title, titleStyle, disabled} = props
    
    const result = StyleSheet.create({
        container: StyleSheet.compose(
          [
            basic.container,
            {
              backgroundColor: disabled ? Colors.disabled : Colors.button
            }
          ],
          style,
          
        ),
        text: [
          basic.text,
          titleStyle,
        ],
      })
    return(
        <TouchableOpacity style={result.container} onPress={onPress} disabled={disabled}>
            <Text style={result.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

ButtonComponent.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  style: PropTypes.any,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
}

export default ButtonComponent;