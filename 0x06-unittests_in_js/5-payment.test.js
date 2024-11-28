const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log 120 for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log 20 for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});