import React from 'react';
import { render } from '@testing-library/react';
import HWCTALink from './hwcta-link';

describe('Data Sources and Methodology link from analysis page', () => {
	const url = '/federal-covid-funding';

	it('expect the text Data Sources and Methodologies to be in the document',  () => {
		const { getByTestId } = render(<HWCTALink url={`${url}/methodologies`} fillColor='red' />)
		const text = getByTestId("dsmText");
		expect(text).toHaveTextContent("Data Sources and Methodologies");
	});

	it('expect the text underline to have the page specific color',  () => {
		const { container } = render(<HWCTALink url={`${url}/methodologies`} fillColor='red' />)
		expect(container.querySelector('a')).toHaveStyle('text-decoration-color: red');
	});

	it('expect the svgs to have the page specific color',  () => {
		const { getByTestId } = render(<HWCTALink url={`${url}/methodologies`} fillColor='red' />)
		expect(getByTestId('dsmArrow')).toHaveAttribute('color', 'red');
	});

	it('expect the link to be correct',  () => {
		const { getByTestId } = render(<HWCTALink url={`${url}/methodologies`} fillColor='red' />)
		expect(getByTestId('hwctaLink').href).toContain('/federal-covid-funding/methodologies');
	});

});