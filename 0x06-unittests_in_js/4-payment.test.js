const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    
    stub.restore();
    consoleSpy.restore();
  });
});