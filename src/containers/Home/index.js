import { connect } from "react-redux";
import Home from "./Home";
import { 
    removeCustomer, 
    removeMember, 
    removeCustomerReset, 
    removeMemberReset 
} from "store/auth/action";
import { compose } from "redux";
import withLoadingOverlay from "components/LoadingOverlay";

export default compose(
    withLoadingOverlay('auth.removeCustomerAction', '...' , removeCustomerReset),
    connect(
    (state) =>({
            listOfCustomers: state.auth.listOfCustomers, 
            listOfMembers: state.auth.listOfMembers,
            salesList: state.auth.salesList,
            user: state.auth.user,
        }),
    {
        removeCustomer,
        removeMember,
        removeCustomerReset,
        removeMemberReset
    })
)(Home);