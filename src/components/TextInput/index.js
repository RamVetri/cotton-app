import { useCallback } from "react"
import { TextInput } from "react-native"
import PropTypes from 'prop-types'
import { Colors } from "../../utils/styles"

const CustomTextInput =(props) => {
    const {name, onChangeText , style, ...rest} = props

    const handleInputChange = useCallback((val) => {
        console.log(name)
        onChangeText({
            name,
            value:val
        })
    },[])
    return (
        <TextInput
            name={name}
            style={style}
            onChangeText={handleInputChange}
            placeholderTextColor={Colors.gray}
            color= '#000'
            {...rest}
        />
    )
}

CustomTextInput.propTypes = {
    name: PropTypes.string,
    onChangeText: PropTypes.func,
    style: PropTypes.object,
}

export default CustomTextInput;