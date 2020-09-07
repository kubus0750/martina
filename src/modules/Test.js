import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
	console.log('From: ', dates[0], ', to: ', dates[1]);
	console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

export default function jakub() {
	return (
		<Space direction="vertical" size={12}>
			<RangePicker
				ranges={{
					Dnes: [moment(), moment()],
					'Tento mesíc': [moment().startOf('month'), moment().endOf('month')]
				}}
				onChange={onChange}
			/>
			<RangePicker
				ranges={{
					Today: [moment(), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')]
				}}
				showTime
				format="YYYY/MMMM/dddd/DD HH:mm:ss"
				onChange={onChange}
			/>
		</Space>
	);
}
