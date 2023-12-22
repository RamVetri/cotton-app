import {
    ScrollView, Text, View 
} from "react-native";
import { useEffect } from "react";
import PropTypes from 'prop-types'
import Button from "components/Button";
import styles from "./styles"
import {default as style} from "../Login/Styles";
import { TextInput } from "components/forms";

function Customers (props) {
    const { handleSubmit, route, dirty, isValid } = props
    const {name} = route
    const data =  name === 'EditCustomers' ? route.params.editData : null

    useEffect(()=>{
        const { customerReset } = props
        customerReset()
    },[])

    return(
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                Personal Details
            </Text>
                <View style={styles.viewContainer}>
                    {data && <TextInput
                        name="customer_id"
                        placeholder="Customer Id"
                        value={data.customer_id}
                        editable={false}
                        containerStyle={styles.containerStyle}
                    />}
                    <TextInput
                        name="name"
                        placeholder="Name"
                        value={data && data.name}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="phone_no"
                        placeholder="Phone No"
                        value={data && data.phone_no}
                        keyboardType='numeric'
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="email"
                        placeholder="Email (Optional)"
                        value={data && data.email}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="street_1"
                        placeholder="Street 1"
                        value={data && data.street_1}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="street_2"
                        placeholder="Street 2 (Optional)"
                        value={data && data.street_2}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="city"
                        placeholder="City"
                        value={data && data.city}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="district"
                        placeholder="District"
                        value={data && data.district}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="state"
                        placeholder="State"
                        value={data && data.state}
                        containerStyle={styles.containerStyle}
                    />
                    <TextInput 
                        name="pincode"
                        placeholder="Pin Code"
                        value={data && data.pincode}
                        containerStyle={styles.containerStyle}
                    />
                    <Button 
                        title="Submit" 
                        onPress={handleSubmit} 
                        style={style.submitBtn}
                        disabled={dirty ? !isValid : true}
                    />
                </View>
        </ScrollView>
    )
}

Customers.propTypes = {
    addCustomer: PropTypes.func,
    navigation: PropTypes.object,
    addCustomerReset: PropTypes.func
}

export default Customers;
