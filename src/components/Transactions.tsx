import React from "react";

interface Transaction {
    id: number;
    amount: number;
    type: 'credit' | 'debit';
}

interface TransactionsProps {
    transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
    let runningBalance = 0;

    return (
        <div className='transactions'>
            <h2>Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Credit/Debit</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        if (transaction.type === 'credit') {
                            runningBalance += transaction.amount;
                        } else {
                            runningBalance -= transaction.amount;
                        }

                        return (
                            <tr key={transaction.id}>
                                <td>Rs.{transaction.amount.toFixed(2)}</td>
                                <td>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
                                <td>Rs.{runningBalance.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
