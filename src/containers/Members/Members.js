import { useEffect } from "react";
import {
    ScrollView, Text, View 
} from "react-native";
import PropTypes from 'prop-types'
import Button from "components/Button";
import styles from "../Customers/styles";
import {default as style} from "../Login/Styles";
import { TextInput } from "components/forms";
import DropDown from "components/DropDown";

const Members = (props) => {
    const { handleSubmit, route, dirty, isValid } = props
    const {name} = route
    const data =  name === 'EditMembers' ? route.params.editData : null

    useEffect(()=>{
        const {memberReset} = props
        memberReset()
    },[])
    
    const rollId = [1, 2]

    return(
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                Personal Details
            </Text>
            <View style={styles.viewContainer}>
            {data && <TextInput
                name="member_id"
                placeholder="Member Id"
                value={data.member_id}
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
                name="email"
                placeholder="Email"
                value={data && data.email}
                containerStyle={styles.containerStyle}
            />
            <TextInput 
                name="password"
                placeholder="Password"
                value={data && data.password}
                containerStyle={styles.containerStyle}
            />
            <DropDown
                name="role_id"
                options={rollId}
                placeholder="Role Id"
                value={data && data.role_id}
                containerStyle={styles.containerStyle}
            /> 
            <TextInput 
                name="phone_no"
                placeholder="Phone No"
                value={data && data.phone_no}
                keyboardType='numeric'
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

Members.propTypes = {
    addMember: PropTypes.func,
    navigation: PropTypes.object,
    addMemberReset: PropTypes.func
}

export default Members;
