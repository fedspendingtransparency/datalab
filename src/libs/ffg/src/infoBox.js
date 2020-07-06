import { select, selectAll } from 'd3-selection';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ReactDOM from 'react-dom';


const d3 = { select, selectAll };
const infoBoxClass = '.info-box';
const triggerClass = '.info-box-trigger';
const triggerClassActive = 'info-box-trigger--active';
const closeButtonClass = 'info-box__close';
const activeClass = 'info-box--active';

function addCloseIcon() {
	const box = d3.select(this);
	const closeButton = box.append('button');
	ReactDOM.render(<CloseIcon />, closeButton.node());
	closeButton.lower();
	closeButton.attr('class', closeButtonClass);
}

function closeBox(trigger, box) {
	box.classed(activeClass, null);
	trigger.classed(triggerClassActive, null);
}

export function triggerInfoBox() {
	const trigger = d3.select(this);
	const id = trigger.attr('data-box-id');
	const box = d3.select(`#${id}`);
	const { innerWidth } = window;
	const coords = trigger.node().getBoundingClientRect();

	let x = coords.left - 10;

	if (x > innerWidth - 300) {
		x = innerWidth - 300;
	}

	box.classed(activeClass, true);
	trigger.classed(triggerClassActive, true);

	box.attr('style', `top:${coords.top - 15 + window.pageYOffset}px;left:${x}px`);

	box.select(`.${closeButtonClass}`)
		.on('click', null)
		.on('click', () => {
			closeBox(trigger, box);
		});
}

export function triggerMainInfoBox() {
	d3.selectAll(infoBoxClass).each(addCloseIcon);

	d3.selectAll(triggerClass)
		.on('click', triggerInfoBox);
}