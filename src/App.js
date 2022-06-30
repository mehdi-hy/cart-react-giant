import React from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
        <h1 style={{ color: 'red' }}>
          you must use a vpn or proxy due to some issues in Iran!!
        </h1>
        <h1 style={{ color: 'green' }}>then refresh</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
