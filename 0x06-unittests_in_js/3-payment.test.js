const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.returnValues[0]).to.equal(120);
    
    spy.restore();
  });
});