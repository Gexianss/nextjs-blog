import React from "react";
import { useState } from "react";
import { Button, Form, Input, DatePicker, Radio } from "antd";
import dayjs from "dayjs";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function form() {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const disabledDate = (current) => {
    return current && current > dayjs().endOf("day");
  };
  const handleDatePickerChange = (date) => {
    if (date) {
      const birthday = dayjs(date);
      const currentDate = dayjs();
      const age = currentDate.diff(birthday, "year");
  
      form.setFieldsValue({
        age: age,
      });
    } else {
      form.setFieldsValue({
        age: undefined,
      });
    }
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onFinish = (values) => {
    setFormData(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (<>
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Birthday"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker onChange={handleDatePickerChange} disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item
        name="native"
        label="Native"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
      >
        <Input disabled style={{ width: '30%' }}/>
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        
      >
        <Input style={{width: '150%'}}/>
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
    {formData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data</h2>
          <p>Name: {formData.name}</p>
          <p>Birthday: {formData.birthday.format("YYYY-MM-DD")}</p>
          <p>Native: {formData.native === 1 ? "Yes" : "No"}</p>
          <p>Age: {formData.age}</p>
          <p>Address: {formData.address}</p>
        </div>
      )}
</>
  )
}
