import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

export function withFormik(options) {
    return Component => {
      const WrappedComponent = props => {
        const { initialValues, validationSchema } = options
        return (
          <Formik
            onSubmit={options.onSubmit(props)}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {formikProps => { //formUtils
                return (
                    <Component {...formikProps} {...props} />
                )
            }}
          </Formik>
        )
      }
      WrappedComponent.propTypes = {
        validationSchema: PropTypes.object,
        initialValues: PropTypes.object,
      }
      return WrappedComponent
    }
}
