import { persistReducer } from "redux-persist"
import storage from '@react-native-async-storage/async-storage'
import { names } from "./action"

const initialState = {
    networkStatus: {
        connected: true,
        hasWifi:true,
    },
}

function appReducer (state = initialState ,{ payload, type }) {
    switch(type) {
        case names.networkStatus: {
            return{
                ...state,
                networkStatus:{
                    ...state.networkStatus,
                    ...payload
                }
            }
        }
        default:
            return state
    }
}

// const persistConfig = {
//     key: 'app',
//     storage,
//     whitelist: ['settings'],
//   }
  
//  export default persistReducer(persistConfig, appReducer)

export default appReducer