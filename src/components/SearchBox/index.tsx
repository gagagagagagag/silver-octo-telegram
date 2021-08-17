import { Form, Input, Button } from 'antd'
import validator from 'validator'

interface Props {}

interface FormValues {
  target: string
}

const SearchBox = () => {
  return (
    <Form
      layout={'inline'}
      validateTrigger={'onFinish'}
      onFinish={(values: FormValues) => console.log(values)}
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
      <Button type={'primary'} htmlType={'submit'}>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
