import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import App from '../../app/components/App';

describe("Countdown", () => {
	it("should exist", () => {
		expect(App).to.exist;
	});
});