import React from 'react';
import { Form, Row, Input, Button, Space } from 'antd';

export default function Formular() {
	const onFinish = values => {
		console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

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
			requiredMark={false}
		>
			<Space align="center" size="small" direction="horizntal">
				<Form.Item {...firstLayout} label="Jméno" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
					<Input />
				</Form.Item>
				<Form.Item label="email" name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
					<Input />
				</Form.Item>

				<Form.Item label="Telefon" name="phone" rules={[{ required: true, message: 'Please input your Phone!' }]}>
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
			</Space>
		</Form>
	);
}
