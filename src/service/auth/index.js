import * as request from "utils/Service"


export async function membersList (id) {
    
    const path = `/api/members/${id?`?member_id=${id}`:''}`
    const response = await request.sendRequest (path)
    const {data} = response
    if ( data.status == 'True'){
        return Array.isArray(data.data)? data.data : [data.data]
    }else
        throw new Error('Something went wrong in membersList')
}

export async function customersList (id) {
    
    const path = `/api/customers/${id?`?customer_id=${id}`:''}`
    const response = await request.sendRequest (path)
    const {data} = response
    if ( data.status == 'True'){
        return Array.isArray(data.data)? data.data : [data.data]
    }else
        throw new Error('Something went wrong in customersList')
}

export async function signUp (data) {
    const path = `/api/register/`
    const response = await request.sendPostRequest (path, data)
    const result = response.data
    if(result.message)
        return result
    else
        throw new Error(result.error)
}

export async function login (data) {
    const path = `/api/login/`
    const response = await request.sendPostRequest (path, data)
    const result = response.data
    if(result.Status === 'True'){
        return result.data
    }
    else{
        console.log(result)
        throw new Error(result.error || "login failed")
    }
}

export async function logout (token) {

    const path = `/api/logout/`
    const response = await request.sendPostRequest (path, token)
    // console.log(response)

    // return response.data
}

export async function addMember (data) {

    const path = `/api/add-member/`
    const response = await request.sendPostRequest (path, data)
    const result = response.data
    // console.log(result.error)
    if(result.Status === 'True')
        return result.data
    else
        throw result.error
}

export async function removeMember (id) {

    const path = `/api/delete-member/`
    const data = {"member_id" : id}
    const response = await request.sendDeleteRequest (path, data)
    const result = response.data
    console.log(result)
    if(result.status === 'True')
        return result
    else
        throw new Error(result.Message)
}

export async function editMember (data) {

    const path = `/api/update-member/`
    const response = await request.sendPatchRequest (path, data)
    const result = response.data
    if(result.Status === 'True')
        return result.data
    else
        throw new Error(result.Message)
}

export async function addCustomer (data) {
    const path = `/api/add-customer/`
    const response = await request.sendPostRequest (path, data)
    // console.log(response)
    const result = response.data
    console.log(result)
    if(result.Status === 'True')
        return result.data
    else
        throw new Error(result.Message || 'AddCustomer Failed')
}

export async function removeCustomer (id) {

    const path = `/api/delete-customer/`
    const data = {"customer_id" : id}
    const response = await request.sendDeleteRequest (path, data)
    const result = response.data
    // console.log(result)
    if(result.status === 'True')
        return result
    else
        throw new Error(result.Message)
}

export async function editCustomer (data) {
    const path = `/api/update-customer/`
    const response = await request.sendPatchRequest (path, data)
    const result = response.data
    console.log(result)
    if(result.Status === 'True')
        return result.data
    else
        throw new Error(result.Message)
}

export async function addSales (data) {
    const path = `/api/add-sales/`
    const response = await request.sendPostRequest (path, data)
    const result = response.data
    if(result.Status === 'True')
        return result.data
    else throw new Error(result.Message)
}

export async function viewSales () {
    const path = `/api/view-sales`
    const response = await request.sendRequest(path)
    const {data} = response
    if (data.status == 'True')
        return data.data
    throw new Error('Something went wrong in viewSales')
}

export async function viewCustomerByNumber (number) {
    const path = `/api/view-customer/?phone_no=${number}`
    const response = await request.sendRequest (path, number)
    const {data} = response
    if (data.status == 'True')
        return data.data
    else
        throw new Error('Something went wrong in viewCustomerByNumber')
}