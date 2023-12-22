import { call, put, select } from "redux-saga/effects"
import * as authService from "service/auth"
import { names, removeMembers } from "./action"
import _get from 'lodash/get'

export function* startAuthSaga ({options}) {
    console.log("startAuthSaga")
    let members = []
    let customers = []
    try{
        members = yield call (authService.membersList)
        customers = yield call (authService.customersList)
        sales = yield call (authService.viewSales)
        // console.log(sales)

    } catch (error) {
        console.log('Error: startAuthSaga')
        console.log(error)
    }

    yield put({
        type: names.membersList,
        payload: members
    })
    yield put({
        type: names.customersList,
        payload: customers
    })
    yield put({
        type: names.viewSales,
        payload: sales
    })
    yield put({
        type: names.viewCustomer[1],
        payload: []
    })
}

export function* signUpSaga ({payload}) {
    try{
        const {data, options} = payload
        const result = yield call(authService.signUp, data)

        if(result.success && options.navigation){
            options.navigation.navigate('Login')
        }

    }catch(error) {
        console.log(error)
    }
}

export function* loginSaga ({payload}) {
    try{
        const { data, options } = payload
        const result = yield call(authService.login, data)
        if(result){
            yield put({
                type: names.login[1],
                payload: result
            })
            if(options.navigation){
                options.navigation.navigate('Home')
            }
        }
    }catch(error){
        console.log(error)
        yield put({
            type: names.login[2],
            payload: {
                error,
            }
        })
    }
}

export function* logOutSaga ({options}) {
    try{
        const token = yield select((state)=> _get(state, 'auth.token'))
        // const res = yield call(authService.logout, token)
        // console.log(res)
        yield put({
            type:names.logOut[1],
        })
        if(options.navigation){
            options.navigation.navigate('UserLogin')
        }
    }catch(error){
        console.log(error)
    }
}

export function* addMemberSaga ({payload, options}) {
    try{
        const data = payload
        const result = yield call(authService.addMember, data)
        if (result){
            yield put({
                type: names.addMember[1],
                payload: result
            })
            const { navigate } = options
            if (navigate) {
                navigate('Home')
            }
        }
    }catch(error) {
        console.log('saga')
        console.log(error)
        yield put({
            type: names.member[0],
            payload: {
                error,
            }
        })
    }
}

export function* editMemberSaga ({payload, options}) {
    try{
        const result = yield call (authService.editMember, payload)
        if (result){
            yield put({
                type: names.editMember[1],
                payload: result
            })
            const { navigate } = options
            if (navigate) {
                navigate('Home')
            }
        }
    }catch(error){
        console.log(error)
        yield put({
            type: names.member[0],
            payload: {
                error,
            }
        })
    }
}

export function* removeMemberSaga ({payload}) {
    try{
        const result = yield call ( authService.removeMember, payload )
        if (result){
            yield put({
                type: names.removeMember[1],
                payload: payload
            })
        }
    }catch(error) {
        console.log(error)
        yield put({
            type: names.removeMember[2],
            payload: {
                error,
            }
        })
    }
}

export function* addCustomerSaga ({payload, options}) {
    try{
        const data = payload
        const result = yield call(authService.addCustomer, data)
        if (result){
            yield put({
                type: names.addCustomer[1],
                payload: result
            })
            const { navigate } = options
                if (navigate) {
                navigate('Home')
            }
        }
    }catch(error) {
        console.log(error)
        yield put({
            type: names.customer[0],
            payload: {
                error,
            }
        })
    }
}

export function* editCustomerSaga ({payload, options}) {
    try{
        const result = yield call (authService.editCustomer, payload)
        if (result){
            yield put({
                type: names.editCustomer[1],
                payload: result
            })
            const { navigate } = options
            if (navigate) {
                navigate('Home')
            }
        }
    }catch(error){
        console.log(error)
        yield put({
            type: names.customer[0],
            payload: {
                error,
            }
        })
    }
}

export function* removeCustomerSaga ({payload}) {
    try{
        const result = yield call ( authService.removeCustomer, payload )
        if (result){
            yield put({
                type: names.removeCustomer[1],
                payload: payload
            })
        }
    }catch(error) {
        console.log(error)
        yield put({
            type: names.removeCustomer[2],
            payload: {
                error,
            }
        })
    }
}

export function* addSalesSaga ({payload,options}) {
    try{
        const result = yield call(authService.addSales, payload)
        if(result){
            yield put({
                type:names.addSales[1],
                payload: result
            })
            const { navigate } = options
            if (navigate) {
                navigate('Home')
            }
        }
    }catch(error){
        console.log(error)
        yield put({
            type: names.addSales[2],
            payload: {
                error,
            }
        })
    }
}

export function* viewCustomerSaga ({payload}) {
    try{
        if (payload.length == 10){
            const result = yield call (authService.viewCustomerByNumber, payload)
            // console.log(res)
            yield put({
                type: names.viewCustomer[1],
                payload: result
            })
        }else{
            yield put({
                type: names.viewCustomer[1],
                payload: []
            })
        }
    }catch(error){
        console.log(error)
    }
}