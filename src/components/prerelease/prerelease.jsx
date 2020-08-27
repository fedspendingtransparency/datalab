import React from 'react';

export default function PreRelease(props) {
	let isQAT = false;
	if(typeof window !== 'undefined') {
		isQAT = window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('datalab-qat') > -1 ? true : false;
	}

	if (isQAT) {
		return (<>{props.children}</>);
	} else {
		return null;
	}
}