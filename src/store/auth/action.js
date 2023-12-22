export const names = {
    startAuth:"start_Auth",
    membersList:"members_List",
    customersList:"customers_List",
    viewSales: "viewSales",
    signUp: "signUp",
    login: ["login", 'login_success', 'login_failed', 'login_reset'],
    logOut: ["logOut", "loggedOut"],
    addMember: ["addMember", "addMember_success"],
    editMember: ["editMember", "editMember_success"],
    member: ["member_failed", 'member_reset'],
    removeMember: ["removeMember", "removeMember_success", "removeMember_failed", "removeMember_reset"],
    addCustomer: ["addCustomer", "addCustomer_success"],
    editCustomer: ["editCustomer", "editCustomerList"],
    customer: ["customer_failed", 'customer_reset'],
    removeCustomer: ["removeCustomer", "removeCustomerList", "removeCustomer_failed", "removeCustomer_reset"],
    addSales: ["addSales", "addSalesList", "addSales_failed", "addSales_reset"],
    viewCustomer: ["viewCustomer", "salesCustomer"]
}

export function startAuth () {
    return{
        type:names.startAuth
    }
}

export function signUp (data, options={}) {
    return{
        type : names.signUp,
        payload: {
            data,
            options 
        },
    }   
}

export function login (data, options={}) {
    return{
        type:names.login[0],
        payload:{
            data, 
            options
        },
    }
}

export function loginReset() {
    return {
      type: names.login[3],
    }
}

export function logOut (options) {
    return{
        type:names.logOut[0],
        options
    }
}

export function addMember (data, options) {
    return{
        type:names.addMember[0],
        payload:data,
        options
    }
}

export function editMember (data, options) {
    return{
        type:names.editMember[0],
        payload:data,
        options
    }
}

export function memberReset() {
    return {
      type: names.member[1],
    }
}

export function removeMember (data) {
    return{
        type:names.removeMember[0],
        payload:data.member_id
    }
}

export function removeMemberReset() {
    return {
      type: names.removeMember[3],
    }
}

export function addCustomer (data, options) {
    return{
        type:names.addCustomer[0],
        payload:data,
        options
    }
}

export function editCustomer (data, options) {
    return{
        type:names.editCustomer[0],
        payload:data,
        options
    }
}

export function customerReset() {
    return {
      type: names.customer[1],
    }
}

export function removeCustomer (data) {
    return{
        type:names.removeCustomer[0],
        payload:data.customer_id
    }
}

export function removeCustomerReset() {
    return {
      type: names.removeCustomer[3],
    }
}

export function addSales (data, options) {
    return{
        type:names.addSales[0],
        payload:data,
        options
    }
}

export function addSalesReset() {
    return {
      type: names.addSales[3],
    }
}

export function viewSales () {
    return{
        type:names.viewSales[0],
    }
}

export function viewCustomer (data) {
    return{
        type:names.viewCustomer[0],
        payload:data
    }
}
