import {
  StyleSheet, Text, TouchableOpacity, View 
} from "react-native";
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from "utils/styles";
import { connect } from "react-redux";

const styles = StyleSheet.create ({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    marginHorizontal:7,
    padding:15,
    borderWidth:1.5,
    borderColor:Colors.button
  },
  key:{
    fontSize:17,
    fontWeight:'500',
    width:100,
    color:Colors.black,
  },
  list:{
    flexDirection:'row',
    padding:2,
  },
  value:{
    color:Colors.black,
    marginLeft:30,
    fontSize:17,
  },
  iconContainer:{
    flexDirection:'row',
  },
  iconStyle: {
    padding: 5,
    color:Colors.button,
  },
})

function List(props){
  const { data, handleEdit, handleDelete, listOfCustomers, listOfMembers, category, user} = props

  if (category === 'sales' ){
    data.memberDetails = listOfMembers.filter((list)=>list.member_id === data.member)
    data.customerDetails = listOfCustomers.filter((list)=>list.customer_id === data.customer)
  }

  return(
    (category === 'customers' || category === 'members')?
    <View style={styles.container}>
      <View>
        <View style={styles.list}>
          <Text style={styles.key}>Name :</Text>
          <Text style={styles.value}>{data.name}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.key}>Phone_No :</Text>
          <Text style={styles.value}>{ data.phone_no }</Text>
        </View>
      </View>
      {/* {(user && user.role_id !== 1 && category !== 'members') ?  */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleEdit(data)}>
            <Icon name='edit' size={20} style={styles.iconStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(data)}>
            <Icon name='delete-outline' size={20} style={styles.iconStyle}/>
          </TouchableOpacity>
        </View>
        {/* : null
      } */}
    </View> :
    
    <View style={styles.container}>
      <View >
        <View style={styles.list}>
          <Text style={styles.key}>member :</Text>
          <Text style={styles.value}>{data.memberDetails[0].name}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.key}>Customer :</Text>
          <Text style={styles.value}>{data.customerDetails[0].name}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.key}>Weight :</Text>
          <Text style={styles.value}>{data.weight_kg}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.key}>Rate :</Text>
          <Text style={styles.value}>{data.rate_per_kg}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.key}>Total :</Text>
          <Text style={styles.value}>{data.rate_per_kg * data.weight_kg}</Text>
        </View>
      </View>
    </View>
  )
}

export default connect(
  (state) =>{
    const {listOfMembers, listOfCustomers, user} = state.auth 
    return{
      listOfMembers,
      listOfCustomers, 
      user
    }
  },
  {}
)(List);

List.propTypes = {
  data: PropTypes.object,
  salesData: PropTypes.object,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  user: PropTypes.object,
}