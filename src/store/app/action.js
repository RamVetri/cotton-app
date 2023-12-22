export const names = {
    startApp : "start_app",
    networkStatus : "setNetworkStatus"
}

export function startApp (options= {}) {
    return{
        type : names.startApp,
        options
    }
}

export function networkStatus () {
    return{
        type: names.networkStatus
    }
}