import { compose } from "redux";
import { connect } from "react-redux";
import { login, loginReset } from "store/auth/action";
import Login from "./Login";
import withLoadingOverlay from "components/LoadingOverlay";
import { ValidationLoginSchema } from "utils/FormikSchema";
import { withFormik } from "components/Formik";

const initialValues = {
  phone_no:'',
  password:''
}
// initialValues, ValidationLoginSchema and name of textInput should be same

export default compose(
  withLoadingOverlay('auth.loginAction', '...' , loginReset),
  connect (
    (state) => ({
        network: state.app.networkStatus,
      }),
    {
      login,
      loginReset
    }
  ),
  withFormik({
    validationSchema: ValidationLoginSchema,
    initialValues,
    onSubmit: props => {
      return (values) => {
        const { login, navigation } = props
        login(values, { navigation })
      }
    },
  }),
)(Login);