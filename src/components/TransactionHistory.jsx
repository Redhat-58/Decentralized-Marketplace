import React from 'react'


const transactions = [
  {
    id: "9CD777EB",
    date: "08-May-2015",
    time: "10:55",
    amount: "-$40.00",
    payment: "Skrill",
  },
  {
    id: "9CE772EB",
    date: "06-May-2015",
    time: "15:05",
    amount: "-$90.00",
    payment: "Skrill",
  },
  {
    id: "9CC772WB",
    date: "01-May-2015",
    time: "11:15",
    amount: "-$192.22",
    payment: "Bank",
  },
  {
    id: "0CG111WB",
    date: "25-Apr-2015",
    time: "19:11",
    amount: "-$122.22",
    payment: "Bank",
  },
  {
    id: "19F150AC99",
    date: "18-Apr-2015",
    time: "11:18",
    amount: "$222.19",
    payment: "Reward",
  },
  {
    id: "11CG7290C",
    date: "10-Apr-2015",
    time: "23:47",
    amount: "$58.88",
    payment: "Cash",
  },
  {
    id: "9CE772EB",
    date: "02-Apr-2015",
    time: "15:05",
    amount: "-$90.00",
    payment: "Skrill",
  },
];


const TransactionHistory = () => {
  
  return (
    <div className="app">
      <header className="header">
        <div className="account-info">
          <h1>Transaction</h1>
          <p className="balance">$12,300</p>
        </div>
        <div className="account-stats">
          <p>
            Available <span>$11,200</span>
          </p>
          <p>
            In Play <span>$1,100</span>
          </p>
        </div>
        <div className="profile">
          <img
            src="https://via.placeholder.com/60"
            alt="Profile"
            className="profile-image"
          />
          <p>Gold Star</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </header>

      <nav className="nav">
        <ul>
          <li>Account Settings</li>
          <li>VIP Store</li>
          <li className="active">Transaction History</li>
        </ul>
      </nav>

      <main className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transfer#</th>
              <th>Time Stamp</th>
              <th>Amount</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{`${transaction.date} ${transaction.time}`}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default TransactionHistory