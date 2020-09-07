import React, { useState } from 'react';
import { DatePicker, Steps, Button, message, Col, Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/cs';
import locale from 'antd/es/date-picker/locale/cs_CZ';
import moment from 'moment';
import formular from './Formular';
import { showSlots } from './Slots';

export default function Steppers() {
	const [date, setDate] = useState(moment());
	const [current, setCurrent] = useState(0); // Step
	const [kalendar, setKalendar] = useState(false);
	const { Step } = Steps;

	const otevriKalendar = () => setKalendar(!kalendar);

	const handleChange = value => {
		setDate(value);
		otevriKalendar();
	};

	const selectedDate = moment(date).format('dddd DD-MM-YYYY');

	function next() {
		setCurrent(current + 1);
	}

	function prev() {
		setCurrent(current - 1);
	}

	function disabledDate(current) {
		// Can not select days before today and today
		return current && current < moment().startOf('day');
	}

	showSlots(date);

	// Steps
	const steps = [
		{
			title: 'Vyberte si datum a volný termín',
			content: (
				<>
					<Col span={8}>
						<a className="datum" onClick={!kalendar ? otevriKalendar : null}>
							<DatePicker
								onChange={handleChange}
								style={{ zIndex: '-100', height: '1px' }}
								locale={locale}
								open={kalendar}
								disabledDate={disabledDate}
							/>
							<span>Datum:</span>
							<span>{selectedDate}</span>
						</a>
					</Col>
					<Col span={16}>
						<Space>
							<Radio.Group name="jakub2" defaultValue="0" buttonStyle="solid" size="large" optionType="default" style={{ marginTop: 16 }}>
								<Radio.Button value="0">10:30 - 12:00</Radio.Button>
								<Radio.Button value="1">12:00 - 13:00</Radio.Button>
								<Radio.Button value="2">14:00 - 15:00</Radio.Button>
								<Radio.Button value="3" disabled={true}>
									16:00 - 17:00
								</Radio.Button>
								<Radio.Button value="4">17:00 - 18:00</Radio.Button>
								<Radio.Button value="5">18:00 - 19:00</Radio.Button>
								<Radio.Button value="6">19:00 - 20:00</Radio.Button>
								<Radio.Button value="7">20:00 - 21:00</Radio.Button>
							</Radio.Group>
						</Space>
					</Col>
				</>
			)
		},
		{
			title: 'Zadejte kontaktní údaje',
			content: <Col span={24}>{formular()}</Col>
		}
	];

	return (
		<>
			<Steps current={current}>
				{steps.map(item => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className="steps-content">{steps[current].content}</div>
			<div className="steps-action">
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => next()}>
						Dále
					</Button>
				)}
				{current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						Zpět na předchozí krok
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button type="primary" onClick={() => message.success('Rezervace odeslána!')}>
						Odeslat rezervaci
					</Button>
				)}
			</div>
		</>
	);
}
