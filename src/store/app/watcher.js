import {fork, takeLatest,} from "redux-saga/effects"
import { names } from "./action"
import * as sagas from "./sagas"

export default function* appWatchers () {
    yield takeLatest (names.startApp , sagas.startAppSaga)
    yield fork (sagas.startNetworkCheckerSaga)
}