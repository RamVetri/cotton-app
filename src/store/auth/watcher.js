import { takeLatest } from "redux-saga/effects";
import { names } from "./action";
import * as sagas from "./sagas"

export default function* authWatchers() {
    yield takeLatest(names.startAuth, sagas.startAuthSaga)
    yield takeLatest(names.signUp, sagas.signUpSaga)
    yield takeLatest(names.login[0], sagas.loginSaga)
    yield takeLatest(names.logOut[0], sagas.logOutSaga)
    yield takeLatest(names.addMember[0], sagas.addMemberSaga)
    yield takeLatest(names.addCustomer[0], sagas.addCustomerSaga)
    yield takeLatest(names.removeMember[0], sagas.removeMemberSaga)
    yield takeLatest(names.removeCustomer[0], sagas.removeCustomerSaga)
    yield takeLatest(names.editMember[0], sagas.editMemberSaga)
    yield takeLatest(names.editCustomer[0], sagas.editCustomerSaga)
    yield takeLatest(names.addSales[0], sagas.addSalesSaga)
    yield takeLatest(names.viewCustomer[0], sagas.viewCustomerSaga)
}