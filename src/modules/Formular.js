import React from 'react';
import { Form, Row, Input, Button } from 'antd';

export default function Formular() {
	const onFinish = values => {
		console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	/* const layout = {
			labelCol: { offset: 4, span: 8, marginBottom: '20px' },
			wrapperCol: { span: 16 }
		}; */
	/* const tailLayout = {
			wrapperCol: { offset: 8 }
		}; */
	const firstLayout = {
		labelCol: { offset: 2 }
	};

	return (
		<Form
			/* {...layout} */
			size="medium"
			layout="inline"
			name="basic"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item {...firstLayout} label="Jméno" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input />
			</Form.Item>
			<Form.Item label="email" name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input />
			</Form.Item>

			<Form.Item label="příjmení" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
				<Input />
			</Form.Item>
			<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.email !== currentValues.email}>
				{({ getFieldValue }) => {
					return getFieldValue('email') === 'jakub' ? (
						<Form.Item name="jakub" label="jakub">
							<Input />
						</Form.Item>
					) : null;
				}}
			</Form.Item>

			<Form.Item /* {...tailLayout} */>
				<Button type="primary" htmlType="submit">
					Rezervovat termín
				</Button>
			</Form.Item>
		</Form>
	);
}
