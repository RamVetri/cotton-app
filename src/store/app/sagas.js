import NetInfo from "@react-native-community/netinfo";
import SplashScreen from "react-native-splash-screen";
import { eventChannel } from "redux-saga";
import { call, delay, put, select, take } from "redux-saga/effects";
import { names } from "./action";
import {names as authNames} from "../auth/action";
import _get from 'lodash/get'

function networkChangeChannel() {
    return eventChannel(emitter => {
        NetInfo.fetch().then(emitter)
        const unsubscribe = NetInfo.addEventListener(emitter)
        return () => {
        unsubscribe()
        }
    })
}

export function* startNetworkCheckerSaga() {
    const channel = yield call(networkChangeChannel)
    while(true){
        const data = yield take(channel)
        let connected = data.isConnected
        let hasWifi = data.type === "wifi"
        const current = yield select((state) => state.app.networkStatus)
        if(current.connected !== connected || hasWifi !== current.hasWifi ){
            if (!connected){
                yield delay(5000);
                const secondTry = yield call(NetInfo.fetch)
                connected = secondTry.isConnected;
                hasWifi = secondTry.type === 'wifi'
            }

            yield put({
                type : names.networkStatus,
                payload : {
                    connected,
                    hasWifi,
                    prevConnected: current.connected,
                }
            })

            // if (connected) {
            //     yield put({
            //       type: connected ? types.startApp : null,
            //     })
            // }
        }
    }
}

export function* startAppSaga({options}) {
    // console.log('app'
    const network  = yield select ( (state) => state.app.networkStatus )
    try{
        if(network.connected){
            yield put({
                type: authNames.startAuth,
                options
            })
        }
    }catch(error){
        console.log(error)
    }
    SplashScreen.hide();

    const user = yield select((state)=> _get(state, 'auth.user'))
    const {navigation} = options
    if(user){
        navigation.navigate('Home')
    }
}