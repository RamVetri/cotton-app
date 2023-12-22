import { all, fork } from "redux-saga/effects";
import appWatchers from "./app/watcher";
import authWatchers from "./auth/watcher";

export default function* rootSaga() {
    yield all([
        yield fork (appWatchers),
        yield fork (authWatchers)
    ])
}