import React from 'react'
import { connect } from 'react-redux'
import {
  Modal, ActivityIndicator, Text, View, useWindowDimensions,
} from 'react-native'
import { Button } from 'react-native-elements'
import Html from 'react-native-render-html'
import _get from 'lodash/get'
import _noop from 'lodash/noop'
import { Colors } from 'utils/styles'
import styles from './styles'
import PropTypes from 'prop-types'

const superStyles = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `${Colors.lightGray}99`,
}

export default function withLoadingOverlay(path, message, resetAction) {
  // console.log('call')
  return (Component) => connect((state) => {
    const data = _get(state, path)
    const loading = data && data.loading
    return {
      error: data && data.error,
      loading
    }
  },
  (dispatch) => ({
    onAction: () => (resetAction
      ? dispatch(resetAction())
      :_noop),
  }))((props) => {
    const { error, onAction, loading } = props
    const {width: contentWidth} = useWindowDimensions();
    return (
      <React.Fragment>
        <Component {...props} />
        {loading && (
          <View style={superStyles}>
            <ActivityIndicator 
              size="large" 
              color={Colors.button}
            />
            <Text style={styles.message}>{message}</Text>
          </View>
        )}
        {error && (
          <Modal
            open={error}
            onRequestClose={onAction}
            transparent
            onBackdropPress={onAction}
          >
            <View style={styles.modalRoot}>
              <View style={styles.inner}>
                <Text style={styles.errorTitle}>Error</Text>
                {error.message ? 
                  <Html 
                    contentWidth={contentWidth} 
                    source={{html : error.message}}
                    baseStyle={styles.message}
                  /> 
                : <>
                    <Text style={styles.message}>{error.email}</Text>
                    <Text style={styles.message}>{error.phone_no}</Text>  
                  </>
                }
                <View style={styles.actions}>
                  <Button 
                    title="OK" 
                    titleStyle={styles.button} 
                    type="clear" 
                    onPress={onAction} 
                  />
                </View>
              </View>
            </View>
          </Modal>
        )}
      </React.Fragment>
    )
  })
}

withLoadingOverlay.propTypes = {
  path: PropTypes.string,
  message: PropTypes.string,
  resetAction: PropTypes.func,
}