import { Form, Input, Button } from 'antd'
import validator from 'validator'

interface Props {
  loading: boolean
  onAddLocation: (location: string) => void
}

interface FormValues {
  target: string
}

const SearchBox: React.FC<Props> = ({ loading, onAddLocation }) => {
  return (
    <Form
      layout={'inline'}
      validateTrigger={'onFinish'}
      onFinish={({ target }: FormValues) => onAddLocation(target)}
    >
      <Form.Item
        name={'target'}
        rules={[
          { required: true, message: 'This field is required!' },
          {
            validator: (_, value) => {
              if (validator.isURL(value) || validator.isIP(value))
                return Promise.resolve()
              return Promise.reject(
                new Error('The value has to be a valid URL or an IP address!')
              )
            },
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button
        type={'primary'}
        htmlType={'submit'}
        loading={loading}
        disabled={loading}
      >
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
