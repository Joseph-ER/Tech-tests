const BankLogic = require('./bankLogic');


describe('BankLogic tests',()=>{
  it('is created with a balance of 100, .deposited and .withdrawn at nil and an empty .statement array',()=>{
    const bank = new BankLogic(100.00);
    expect(bank.balance).toEqual(100.00);
    expect(bank.deposited).toEqual(0.00);
    expect(bank.withdrawn).toEqual(0.00);
    expect(bank.statements).toEqual([]);
  });
  it('deposit class increases balance by 100 with date and stores 100 in .deposited and sets .withdrawn to 0 for this transaction',()=>{
    const bank = new BankLogic(0.00);
    bank.deposit(100.00,'12/12/12');
    expect(bank.balance).toEqual(100.00);
    expect(bank.deposited).toEqual(100.00);
  });
  it('withdraw class reduces balance by 100 with date and stores 100 in .withdrawn and sets .deposited to 0 for this transaction',()=>{
    const bank = new BankLogic(100.00);
    bank.withdraw(100.00,'12/12/12');
    expect(bank.balance).toEqual(0.00);
    expect(bank.withdrawn).toEqual(100.00);
  });
  it('is created with empty this.deposit',() => {
    const bank = new BankLogic(0.00);
    expect(bank.deposited).toEqual(0.00);
  });
  it('is created with empty this.withdrawn',() => {
    const bank = new BankLogic(0.00);
    expect(bank.withdrawn).toEqual(0.00);
  });
  it('depositing 100 the correct data is stored in .statements',() => {
    const bank = new BankLogic(0.00);
    bank.deposit(100.00,'12/12/12');
    expect(bank.balance).toEqual(100.00);
    expect(bank.statements[0]).toEqual({"balance": "100.00", "credit": "100.00", "date": "12/12/12", "debit": "0.00"});
  });
  it('withdrawing 100 the correct data is stored in .statements',() => {
    const bank = new BankLogic(100.00);
    bank.withdraw(100.00,'12/12/12');
    expect(bank.balance).toEqual(0.00);
    expect(bank.statements[0]).toEqual({"debit": "100.00", "date": "12/12/12", "balance": "0.00", "credit": "0.00"});
  });
  it('stores a withdraw transaction and a deposit transaction in .statements',() => {
    const bank = new BankLogic(0.00);
    bank.deposit(100.00,'12/12/12');
    bank.withdraw(50.00,'13/12/12');
    expect(bank.statements.length).toEqual(2);
  });
});