import { StyleSheet } from "react-native";
import Root from "./src/containers/Root";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";
import { MenuProvider } from "react-native-popup-menu";

const  App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SafeAreaView style={styles.container}> */}
          <MenuProvider>
            <Root />
          </MenuProvider>
        {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
