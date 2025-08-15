// import { useEffect, useState } from 'react';
// import CurrencySelect from './CurrencySelect';

// function CurrencyConverter() {
//   const [amount, setamount] = useState(100);
//   const [fromCurrency, setfromCurrency] = useState('USD');
//   const [ToCurrency, setToCurrency] = useState('NGN');
//   const [Result, setResult] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Function to swap currencies
//   const handleSwapCurrencies = () => {
//     setfromCurrency(ToCurrency);
//     setToCurrency(fromCurrency);
//   };

//   // Function to get the exchange rate from the API
//   const getExchangeRate = async () => {
//     const API_KEY = '000b608a4e8fc919bf4bd55a';
//     const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${ToCurrency}`;

//     setIsLoading(true);
  
    
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw Error('Oops! Something went wrong');

//       const data = await response.json();
//       const rate = (data.conversion_rate * amount).toFixed(2);
//       setResult(`${amount} ${fromCurrency} = ${rate} ${ToCurrency}`);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Function to handle form submission
//   const handleformSubmit = (e) => {
//     e.preventDefault();
//     getExchangeRate();
//   };

//   // Call getExchangeRate when the component mounts
//   useEffect(() => {
//     getExchangeRate();
//   }, []);

//   return (
//     <div className='currency-converter'>
//       <h2 className='converter-title'>Currency Converter</h2>
//       <form className='converter-form' onSubmit={handleformSubmit}>
//         <div className='form-group'>
//           <label className='form-label'>Enter Amount</label>
//           <input
//             type='number'
//             className='form-input'
//             value={amount}
//             onChange={e => setamount(e.target.value)}
//             required
//           />
//         </div>

//         <div className='form-group form-currency-group'>
//           <div className='form-section'>
//             <label className='form-label'>From</label>
//             <CurrencySelect
//               selectedCurrency={fromCurrency}
//               handleCurrency={(e) => setfromCurrency(e.target.value)}
//             />
//           </div>
          
//           <div className='swap-icon' onClick={handleSwapCurrencies}>
//             <svg
//               width='16'
//               height='16'
//               viewBox='0 0 20 19'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 d='M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z'
//                 fill='#fff'
//               />
//             </svg>
//           </div>

//           <div className='form-section'>
//             <label className='form-label'>To:</label>
//             <CurrencySelect
//               selectedCurrency={ToCurrency}
//               handleCurrency={(e) => setToCurrency(e.target.value)}
//             />
//           </div>
//         </div>

//         <button type='submit' className={`${isLoading ? 'loading' : ''} submit-button`}>
//           {isLoading ? 'Loading...' : 'Get Exchange Rate'}
//         </button>
//         <p className='exchange-rate-result'>
//           {isLoading ? 'Getting exchange rate....' : Result}
//         </p>
//       </form>
//     </div>
//   );
// }

// export default CurrencyConverter;









import { useEffect, useState } from 'react';
import CurrencySelect from './CurrencySelect';

function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Currency symbols map
  const currencySymbols = {
    USD: '$',
    NGN: '₦',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CAD: 'C$',
    AUD: 'A$',
    CNY: '¥',
    INR: '₹',
    ZAR: 'R',
    GHS: '₵',
    KES: 'KSh',
    // Add more if needed
  };

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Get exchange rate
  const getExchangeRate = async () => {
    const API_KEY = '000b608a4e8fc919bf4bd55a';
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Oops! Something went wrong');

      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(
        `${currencySymbols[fromCurrency] || ''}${amount} ${fromCurrency} = ${currencySymbols[toCurrency] || ''}${rate} ${toCurrency}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  // Get exchange rate when component mounts & every 30 seconds
  useEffect(() => {
    getExchangeRate();
    const interval = setInterval(() => {
      getExchangeRate();
    }, 30000); // update every 30 seconds

    return () => clearInterval(interval);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className='currency-converter'>
      <h2 className='converter-title'>Currency Converter</h2>
      <form className='converter-form' onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label className='form-label'>Enter Amount</label>
          <input
            type='number'
            className='form-input'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className='form-group form-currency-group'>
          <div className='form-section'>
            <label className='form-label'>From</label>
            <CurrencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={(e) => setFromCurrency(e.target.value)}
            />
          </div>

          <div className='swap-icon' onClick={handleSwapCurrencies}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 20 19'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z'
                fill='#fff'
              />
            </svg>
          </div>

          <div className='form-section'>
            <label className='form-label'>To:</label>
            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>

        <button
          type='submit'
          className={`${isLoading ? 'loading' : ''} submit-button`}
        >
          {isLoading ? 'Loading...' : 'Get Exchange Rate'}
        </button>
        <p className='exchange-rate-result'>
          {isLoading ? 'Getting exchange rate....' : result}
        </p>
      </form>
    </div>
  );
}

export default CurrencyConverter;










