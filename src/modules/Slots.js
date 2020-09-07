import React from 'react';
import moment from 'moment';

const slots = {
	1: {
		0: {
			from: '10:00',
			till: '11:00',
			reserved: false
		},
		1: {
			from: '11:00',
			till: '12:00',
			reserved: false
		}
	},
	2: {
		0: {
			from: '10:00',
			till: '11:00',
			reserved: false
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
	console.log(results);
	console.log(moment(date).day());
	return results;
}
