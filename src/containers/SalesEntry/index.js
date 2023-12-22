import { connect } from "react-redux";
import SalesEntry from "./SalesEntry";
import { viewCustomer, addSales, addSalesReset } from "store/auth/action";
import { compose } from "redux";
import withLoadingOverlay from "components/LoadingOverlay";
import { withFormik } from "components/Formik";
import { ValidationEntrySchema } from "utils/FormikSchema";

const initialValues = {
    member: '',
    customer: '',
    weight_kg:'',
    rate_per_kg:''
}
// initialValues, ValidationEntrySchema and name of textInput should be same

export default compose(
    withLoadingOverlay('auth.addSalesAction', '...' , addSalesReset),
    connect(
    (state)=>{
        const { current, user } = state.auth
        return{
            current, 
            user
        }
    },
    {
        viewCustomer,
        addSales,
        addSalesReset
    }),
    withFormik({
        validationSchema :ValidationEntrySchema,
        initialValues,
        onSubmit: props => {
            return(values) => {
                const { addSales, navigation }= props
                addSales(values, navigation)
            }
        }
    })
)(SalesEntry)