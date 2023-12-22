import _get from 'lodash/get'
import { names } from "./action"

const initialState = {
    user: null, 
    login:null,
    listOfMembers: null,
    listOfCustomers: null,
    salesList: null
}

function authReducer (state = initialState , { payload , type }) {
    switch(type){
        case names.membersList: {
            return{
                ...state,
                listOfMembers : payload
            }
        }
        case names.customersList: {
            return{
                ...state,
                listOfCustomers : payload
            }
        }
        case names.viewSales: {
            return{
                ...state,
                salesList : payload
            }
        }
        case names.login[0]: {
            return{
                ...state,
                loginAction:{
                    loading: true
                },
            }
        }
        case names.login[1]: {
            return{
                ...state,
                user: payload,
                loginAction: {
                    loading: false
                }
            }
        }
        case names.login[2]: {
            const {error} = payload
            return{
                ...state,
                loginAction: {
                    error,
                    loading: false
                }
            }
        }
        case names.login[3]: {
            return{
                ...state,
                loginAction: null,
            }
        }
        case names.logOut[1]: {
            return{
                ...state,
                user: null
            }
        }
        case names.addMember[0]: {
            console.log('re')
            return{
                ...state,
                memberAction:{
                    loading:true
                }
            }
        }
        case names.addMember[1]: {
            return{
                ...state,
                listOfMembers : state.listOfMembers.concat([payload]),
                memberAction: {
                    loading: false
                }
            }
        }
        case names.editMember[0]: {
            return{
                ...state,
                memberAction:{
                    loading: true
                }
            }
        }
        case names.editMember[1]: {
            let current = state.listOfMembers.filter((list)=> list.member_id !== payload.member_id)
            current = current.concat([payload])    
            return{
                ...state,
                listOfMembers : current,
                memberAction: {
                    loading: false
                }
            }
        }
        case names.member[0]: {
            const {error} = payload
            return{
                ...state,
                memberAction:{
                    error,
                    loading:false
                }
            }
        }
        case names.member[1]: {
            return{
                ...state,
                memberAction: null
            }
        }
        case names.removeMember[0]: {
            return{
                ...state,
                removeMemberAction:{
                    loading:true
                }
            }
        }
        case names.removeMember[1]: {
            const id = payload
            return{
                ...state,
                listOfMembers : state.listOfMembers.filter((list)=> list.member_id !== id),
                removeMemberAction: {
                    loading: false
                }
            }
        }
        case names.removeMember[2]: {
            const {error} = payload
            return{
                ...state,
                removeMemberAction: {
                    error,
                    loading: false
                }
            }
        }
        case names.removeMember[3]: {
            return{
                ...state,
                removeMemberAction: null,
            }
        }
        case names.addCustomer[0]: {
            return{
                ...state,
                customerAction:{
                    loading:true
                }
            }
        }
        case names.addCustomer[1]: {
            return{
                ...state,
                listOfCustomers : state.listOfCustomers.concat([payload]),
                customerAction: {
                    loading: false
                }
            }
        }
        case names.editCustomer[0]: {
            return{
                ...state,
                customerAction:{
                    loading:true
                }
            }
        }
        case names.editCustomer[1]: {
            let current = state.listOfCustomers.filter((list)=> list.customer_id !== payload.customer_id)
            current = current.concat([payload])    
            return{
                ...state,
                listOfCustomers : current,
                customerAction: {
                    loading: false
                }
            }
        }
        case names.customer[0]: {
            const {error} = payload
            return{
                ...state,
                customerAction:{
                    error,
                    loading:false
                }
            }
        }
        case names.customer[1]: {
            return{
                ...state,
                customerAction: null
            }
        }
        case names.removeCustomer[0]: {
            return{
                ...state,
                removeCustomerAction:{
                    loading:true
                }
            }
        }
        case names.removeCustomer[1]: {
            const id = payload
            return{
                ...state,
                listOfCustomers : state.listOfCustomers.filter((list)=> list.customer_id !== id),
                removeCustomerAction: {
                    loading: false
                }
            }
        }
        case names.removeCustomer[2]: {
            const {error} = payload
            return{
                ...state,
                removeCustomerAction: {
                    error,
                    loading: false
                }
            }
        }
        case names.removeCustomer[3]: {
            return{
                ...state,
                removeCustomerAction: null,
            }
        }
        case names.addSales[0]: {
            return{
                ...state,
                addSalesAction:{
                    loading:true
                }
            }
        }
        case names.addSales[1]: {
            return{
                ...state,
                salesList : state.salesList.concat([payload]),
                addSalesAction: {
                    loading: false
                }
            }
        }
        case names.addSales[2]: {
            const {error} = payload
            return{
                ...state,
                addSalesAction: {
                    error,
                    loading: false
                }
            }
        }
        case names.addSales[3]: {
            return{
                ...state,
                addSalesAction: null,
            }
        }
        case names.viewCustomer[1]: {
            const customer = payload
            return{
                ...state,
                current : customer
            }
        }
        default:{
            return state
        }
    }
}

export default authReducer
