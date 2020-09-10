import React from 'react';
import moment from 'moment';

const slots = {
	0: {
		0: {
			from: '10:00',
			till: '11:00',
			reserved: false
		},
		1: {
			from: '11:00',
			till: '12:00',
			reserved: false
		},
		2: {
			from: '12:30',
			till: '14:30',
			reserved: false
		},
		3: {
			from: '15:00',
			till: '16:00',
			reserved: true
		},
		4: {
			from: '17:30',
			till: '19:00',
			reserved: false
		},
		5: {
			from: '20:00',
			till: '22:00',
			reserved: true
		}
	},
	1: {
		0: {
			from: '10:00',
			till: '11:00',
			reserved: true
		},
		1: {
			from: '11:00',
			till: '12:00',
			reserved: false
		},
		2: {
			from: '16:00',
			till: '18:00',
			reserved: false
		}
	},
	2: {
		0: {
			from: '10:00',
			till: '11:00',
			reserved: true
		},
		1: {
			from: '11:00',
			till: '12:00',
			reserved: false
		}
	}
};

export function showSlots(date) {
	const results = slots[moment(date).day()];

	return results;
}
