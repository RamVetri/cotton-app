import { startApp } from "store/app/action";
import {connect} from "react-redux"
import Root from "./Root";

export default connect (
    null,
    {startApp},
)(Root)