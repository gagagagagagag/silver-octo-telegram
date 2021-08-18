import validator from 'validator'
import { useDispatch } from 'react-redux'
import { FormControl, Input, FormErrorMessage, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'

import classes from './SearchBox.module.css'
import { AppDispatch } from '../../store'
import { addLocation } from '../../store/actions/locationHistory'

const SearchBox: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const formik = useFormik({
    initialValues: {
      locationSource: '',
    },
    onSubmit: (values, actions) =>
      dispatch(addLocation(values.locationSource)).then(() =>
        actions.resetForm()
      ),
    validate: (values) => {
      if (
        !validator.isIP(values.locationSource) &&
        !validator.isURL(values.locationSource)
      )
        return {
          locationSource: 'Location source has to be a valid IP or URL!',
        }

      if (
        validator.isURL(values.locationSource) &&
        !validator.isURL(values.locationSource, { protocols: [] })
      ) {
        return {
          locationSource:
            'Please omit the protocol name in the URL (http/https)',
        }
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={classes.Form}>
      <FormControl
        isInvalid={Boolean(
          formik.errors.locationSource && formik.touched.locationSource
        )}
      >
        <Input
          name={'locationSource'}
          value={formik.values.locationSource}
          onChange={formik.handleChange}
          placeholder={'IP Address or URL'}
        />
        <FormErrorMessage>{formik.errors.locationSource}</FormErrorMessage>
      </FormControl>
      <Button isLoading={formik.isSubmitting} type={'submit'} ml={'5px'}>
        Search
      </Button>
    </form>
  )
}

export default SearchBox
