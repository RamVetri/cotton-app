import { connect } from "react-redux";
import Customers from "./Customers";
import { addCustomer, editCustomer, customerReset } from "store/auth/action";
import { compose } from "redux";
import withLoadingOverlay from "components/LoadingOverlay";
import { withFormik } from "components/Formik";
import { CustomerSchema } from "utils/FormikSchema";

const initialValues = {
    name : '',
    phone_no: '',
    street_1: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
}
// initialValues, CustomerSchema and name of textInput should be same

export default compose(
    withLoadingOverlay('auth.customerAction', '...' , customerReset),
    connect(
        null,
        {
            addCustomer,
            editCustomer,
            customerReset
        }
    ),
    withFormik({
        validationSchema : CustomerSchema,
        initialValues,
        onSubmit: props => {
            return(values) => {
                const { addCustomer, editCustomer, navigation, route }= props
                const {name} = route
                name === "AddCustomers"? 
                    addCustomer(values, navigation) :
                    editCustomer(values, navigation)
            }
        }
    })
) (Customers);