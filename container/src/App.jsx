import React, { Suspense } from 'react';

const CryptoApp = React.lazy(() => import('crypto/CryptoApp'));
const CurrencyApp = React.lazy(() => import('currency/CurrencyApp'));

const App = () => (
  <div className="container">
    <h1>Dashboard</h1>
    <div className="micro-frontends">
      <Suspense fallback={<div>Loading Crypto Tracker...</div>}>
        <CryptoApp />
      </Suspense>
      <Suspense fallback={<div>Loading Exchange Rates...</div>}>
        <CurrencyApp />
      </Suspense>
    </div>
  </div>
);

export default App;