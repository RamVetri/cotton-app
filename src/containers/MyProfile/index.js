import { connect } from "react-redux";
import { myProfile } from "../../store/auth/action";
import MyProfile from "./MyProfile";

export default connect(
    null,
    {myProfile}
)(MyProfile)