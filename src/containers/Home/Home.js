import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from 'prop-types'
import { FlatList } from "react-native";
import { showConfirmDelete } from "utils/DeleteModal";
import List from "components/List";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from "utils/styles";
import SelectDropdown from "react-native-select-dropdown";
import { adminListOption, nonAdminListOption } from "utils/list";

function Home (props) {
  const{ navigation, listOfCustomers, listOfMembers, salesList, removeCustomer, removeMember, removeMemberReset, user, removeCustomerReset } =props
  const options = user && user.role_id === 1 ? adminListOption : nonAdminListOption
  const [selectedList, setSelectedList] = useState(options[0])

  useEffect(()=>{
    selectedList === 'CustomersList' ? 
      removeCustomerReset(): 
    selectedList === 'MembersList' ?
      removeMemberReset() : null
  },[])

  const handleEdit = (editData) => {
    selectedList === 'CustomersList' ? 
      navigation.navigate("EditCustomers", {editData}) : 
      navigation.navigate("EditMembers", {editData})
  }

  const handleDelete = async (item) => {
    const response = await showConfirmDelete()
    if(response){
      selectedList === 'CustomersList' ? 
      removeCustomer(item) : removeMember(item)
    }
  }

  const data = selectedList === 'CustomersList' ? 
    listOfCustomers : selectedList === 'MembersList' ? 
    listOfMembers : salesList

    // console.log(data)

  const category = selectedList === 'CustomersList' ? 
    'customers' : selectedList === 'MembersList' ? 
    'members' : 'sales'

  renderItem = ({item}) => {
    return(
      <List 
        data={item} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
        category= {category}
      />
    )
  }

  handleIcon = () => {
    if(selectedList === 'CustomersList')
      navigation.navigate('AddCustomers')
    else if(selectedList === 'MembersList')
      navigation.navigate('AddMembers')
    else
      navigation.navigate('SalesEntry')
  }

  return(
    <View style={styles.container}>
      {/* <HeaderHome navigation={navigation}/> */}
      <View style={styles.header}>
        <Icon name='add-circle' style={styles.icon} size={40} onPress ={handleIcon}/>
          <SelectDropdown
            data={options}
            onSelect={(selectedItem) => {setSelectedList(selectedItem)}}
            renderDropdownIcon={()=>{
              return <Icon name="keyboard-arrow-down" style={{color:Colors.black}} size={25}/>
            }}
            defaultValue={options[0]}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem
            }}
            buttonStyle={styles.button}
            dropdownStyle={styles.dropdown}
            rowTextForSelection={(item) => {
              return item
            }}
          />
      </View>
      <FlatList 
        data={data}
        renderItem={renderItem}
        // initialNumToRender={10}
        // maxToRenderPerBatch={10}
        style={{marginVertical:10}}
      />
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.any,
  listOfCustomers: PropTypes.array,
  listOfMembers: PropTypes.array,
  salesList: PropTypes.array,
  removeCustomer: PropTypes.func,
  removeMember: PropTypes.func,
  removeCustomerReset: PropTypes.func,
  removeMemberReset: PropTypes.func,
  user: PropTypes.object,
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
  },
  header:{
    flexDirection:'row',
    marginTop:10,
    backgroundColor:Colors.deepLightGray,
    justifyContent:'space-between',
    paddingHorizontal:30,
    alignItems:'center',
    height:60
  },
  icon:{
    color:Colors.button
  },
  button:{
    borderWidth: 1.5,
    borderBottomColor:Colors.button,
    height: 40,
    width: 180,
    borderRadius:10
  },
  dropdown:{
    borderRadius:10
  }
})

export default Home;
