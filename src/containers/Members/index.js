import { connect } from "react-redux";
import Members from "./Members";
import { addMember, editMember, memberReset } from "store/auth/action";
import { compose } from "redux";
import withLoadingOverlay from "components/LoadingOverlay";
import { withFormik } from "components/Formik";
import { MemberSchema } from "utils/FormikSchema";

const initialValues = {
    name : '',
    password: '',
    role_id: null,
    phone_no: null,
} 
// initialValues, MemberSchema and name of textInput should be same

export default compose(
    withLoadingOverlay('auth.memberAction', '...' , memberReset),
    connect(
        null,
        {
            addMember,
            editMember,
            memberReset
        }
    ),
    withFormik({
        validationSchema : MemberSchema,
        initialValues,
        onSubmit: props => {
            return(values) => {
                const { addMember, editMember, navigation, route }= props
                const {name} = route
                name === 'AddMembers' ?
                    addMember(values, navigation) :
                    editMember(values, navigation)
            }
        }
    })
)(Members)