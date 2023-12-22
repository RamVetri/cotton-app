import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import { Colors } from '../../utils/styles';
import { useField } from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
	container:{
		marginBottom:25,
	},
    field:{
		flexDirection: 'row',
		alignItems: 'center',
		height:45,
		width:"80%",
		// borderWidth:1
    },
	icon:{
		padding:5,
		color:Colors.darkGray,
	},
	input: {
		height: 45,
		borderColor:Colors.gray,
		borderRadius:5,
        flexDirection: 'row',
		width:'100%',
		fontWeight:'500',
		color:Colors.black,
		// borderWidth: 1,s
	  },
	radioContainer: {
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
		// borderWidth:1
		// paddingLeft:10
	},
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: Colors.gray,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRB: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: Colors.darkGray
	},
    radioText: {
        marginLeft: 10,
        marginRight:15,
        fontSize: 16,
        color: Colors.gray,
        fontWeight: '500'
    },
	errorText: {
		color: Colors.error,
		marginTop: 5,
		fontSize: 13,
		// paddingLeft:15,
	  },
	  
});

function RadioButton (props) {

	// const [ value, setValue ] = useState(null)
	const { options, name, value, setFieldValue, reset, setReset, icon, containerStyle } = props;
	const [field, meta, helpers] = useField(name)
	const hasError = meta.touched && meta.error
	const { setValue } = helpers

	useEffect( ()=> {
		if(value)
		  setValue(value)
	  },[value])
	
	// console.log(field)
	handleInputChange = (val) => {
		// setValue(val);
		// console.log(val)
		// setFieldValue(name, val);
		setValue(val)
	}
	return (
		<View style={[styles.container,containerStyle && containerStyle]}>
			<View style={styles.field}>
				{icon && <Icon style={styles.icon} name={icon} size={20} />}
				<View style={styles.input}>
					{options.map(res => {
						return (
							<View key={res.key} style={styles.radioContainer}>
								<TouchableOpacity
									style={styles.radioCircle}
									onPress={ () => {
										handleInputChange(res.value)
										// setReset(true)
									}}
								>
									{(field.value === res.key && <View style={styles.selectedRB} />)}
								</TouchableOpacity>
								<Text style={[styles.radioText, field.value === res.key && {color:'#000'}]}>{res.value}</Text>
							</View>
						);
					})}
				</View>
			</View>
			{ hasError ?
				<Text style={[styles.errorText,icon && {paddingLeft:28} ]}>{ meta.error }</Text>
			: null
			}
		</View>
	);
}

RadioButton.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string,
	value: PropTypes.string,
	icon: PropTypes.string,
	containerStyle: PropTypes.object,
}

export default RadioButton;