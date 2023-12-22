import { 
    ScrollView, Text, TextInput,
    TouchableOpacity, View 
} from "react-native";
import { styles } from "./styles";
import {default as style} from "../Login/Styles";
import { TextInput as Textinput } from "components/forms";
import PropTypes from 'prop-types'
import { Colors } from "utils/styles";
import Button from "components/Button";
import { useEffect, useState } from "react";

function SalesEntry(props) {
    const { viewCustomer, current, addSales, user, navigation, addSalesReset } = props
    const [ data, seData ] = useState({customer_id:'' ,name: '', phone_number: ''})

    useEffect(()=>{
        addSalesReset()
    },[])
    
    const handleTouch=(item)=>{
        seData({customer_id:item.customer_id, name:item.name, phone_number: item.phone_no})
        handleInputChange('')
    }

    handleSubmit=(val)=>{
        const data1 = {
            "member" : val.member_id,
            "customer" : data.customer_id,
            "weight_kg" : val.weight_kg,
            "rate_per_kg" : val.rate_per_kg
        }
        addSales(data1, navigation)
    }

    const handleInputChange = (val) => {
        viewCustomer(val)
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Enter Customer Phone Number"
                    onChangeText={handleInputChange}
                    placeholderTextColor={Colors.button}
                />
            </View>
            {current.length !== 0 &&
                <ScrollView style={styles.modelContainer}>
                    {current.map(item => {
                        return(
                            <TouchableOpacity style={styles.modalTouch} key={item.customer_id} onPress={() => handleTouch(item)}>
                                <Text style={styles.modalText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            }
            <Textinput 
                name="member_id"
                placeholder="Member Id"
                editable={false}
                value={user.member_id}
            />
            <Textinput 
                name="customer_name"
                placeholder="Customer Name"
                value={String(data.name)}
                editable={false}
            />
            <Textinput 
                name="Phone_number"
                placeholder="Phone No"
                value={String(data.phone_number)}
                editable={false}
            />
            <Textinput 
                name="weight_kg"
                placeholder="Weight in Kg"
            />
            <Textinput 
                name="rate_per_kg"
                placeholder="Rate Per in Kg"
            />
            <Button
                title='Enter' 
                onPress={handleSubmit}
                style={style.submitBtn} 
                disabled={dirty ? !isValid : true}
            />
        </ScrollView>
    )
}

SalesEntry.propTypes = {
    viewCustomer: PropTypes.func,
    current: PropTypes.array
}

export default SalesEntry;