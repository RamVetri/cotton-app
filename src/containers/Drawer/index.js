import { connect } from "react-redux";
import DrawerComponent from "./Drawer" ;

export default connect(
    (state) =>{
        const {user} = state.auth 
        return{
            user
        }
    },
    {}
)(DrawerComponent);