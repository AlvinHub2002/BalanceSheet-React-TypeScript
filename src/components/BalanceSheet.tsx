import React, { useState } from 'react';
import Transactions from './Transactions';

const BalanceSheet: React.FC = () => {
    const [amount, setAmount] = useState<number>(10000);
    const [transactions, setTransactions] = useState<any[]>([]);
    const [transactionType, setTransactionType] = useState<'credit' | 'debit'>('credit');

    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (amount <= 0) {
            alert("Amount must be greater than 0");
            return;
        }

        const newTransaction = {
            id: transactions.length + 1,
            amount: amount,
            type: transactionType,
        };

        setTransactions([...transactions, newTransaction]);

        if (transactionType === 'credit') {
            setAmount(prevAmount => prevAmount + amount);
        } else {
            setAmount(prevAmount => prevAmount - amount);
        }
        setAmount(0);
    };

    return (
        <div className='balancesheet'>
            <h1 className="balance-main">Balance Sheet</h1>
            <div className="balanceAmount">
                <p>Account Balance: Rs. {amount.toFixed(2)}</p>
            </div>
            <form onSubmit={submitHandle}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Amount"
                    required
                />
                <select value={transactionType} onChange={(e) => setTransactionType(e.target.value as 'credit' | 'debit')}>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
                <button type="submit">Add Transaction</button>
            </form>
            <div>
                <Transactions transactions={transactions} />
            </div>
        </div>
    );
};

export default BalanceSheet;
