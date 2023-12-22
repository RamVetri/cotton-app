import { connect } from "react-redux";
import { signUp } from "../../store/auth/action";
import SignUp from "./SignUp";

export default connect (
    null,
    {signUp}
)(SignUp);