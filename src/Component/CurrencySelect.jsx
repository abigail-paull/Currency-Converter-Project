// const currencyCodes =[ "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "INR",
//     "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
//     "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
//     "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
//     "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
//     "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
//     "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
//     "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
//     "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
//     "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
//     "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
//     "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
//     "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
//     "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
//     "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
//     "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
//     "ZWL"
                                                                     
// ];

// const CurrencySelect = ({selectedCurrency, handleCurrency}) => {
//     const countryCode = selectedCurrency.substring(0, 2);
   
//   return (

//     <div className='currency-select'>
//             <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="flag" />
//             <select 
//             onChange={handleCurrency}
//              className='currency-dropdown' value={selectedCurrency}>
//             {currencyCodes.map(currency =>(
//              <option key={currency} value= {currency}>{currency}</option>   
//             ))}
          
           
//             </select>
//           </div>
                
//   )
// }

// export default CurrencySelect








const currencyCodes = [
  "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "NGN",
  "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
  "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
  "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
  "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
  "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
  "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
  "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
  "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
  "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
  "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
  "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
  "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
  "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
  "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
  "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
  "ZWL"
];

const currencySymbols = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: 'A$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: '$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: '$',
  BOB: 'Bs.',
  BRL: 'R$',
  BSD: '$',
  BTN: 'Nu.',
  BWP: 'P',
  BYN: 'Br',
  BZD: '$',
  CAD: 'C$',
  CDF: 'FC',
  CHF: 'CHF',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  CUP: '₱',
  CZK: 'Kč',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EGP: '£',
  ETB: 'Br',
  EUR: '€',
  FJD: '$',
  GBP: '£',
  GEL: '₾',
  GHS: '₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: '$',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JMD: '$',
  JOD: 'د.ا',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'с',
  KHR: '៛',
  KMF: 'CF',
  KRW: '₩',
  KWD: 'د.ك',
  KYD: '$',
  KZT: '₸',
  LAK: '₭',
  LBP: 'ل.ل',
  LKR: '₨',
  LRD: '$',
  LSL: 'L',
  LYD: 'ل.د',
  MAD: 'د.م.',
  MDL: 'L',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'Ks',
  MNT: '₮',
  MOP: 'P',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: 'NZ$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: '₲',
  QAR: '﷼',
  RON: 'lei',
  RSD: 'din',
  RUB: '₽',
  RWF: 'FRw',
  SAR: '﷼',
  SBD: '$',
  SCR: '₨',
  SDG: 'ج.س',
  SEK: 'kr',
  SGD: 'S$',
  SLL: 'Le',
  SOS: 'Sh',
  SRD: '$',
  SSP: '£',
  STN: 'Db',
  SYP: '£',
  SZL: 'L',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRY: '₺',
  TTD: '$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYU: '$U',
  UZS: "so'm",
  VES: 'Bs.',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'ZK',
  ZWL: '$'
};

const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
  const countryCode = selectedCurrency.substring(0, 2);

  return (
    <div className='currency-select'>
      <img
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        alt={`${selectedCurrency} flag`}
      />
      <select
        onChange={handleCurrency}
        className='currency-dropdown'
        value={selectedCurrency}
      >
        {currencyCodes.map(currency => (
          <option key={currency} value={currency}>
            {currencySymbols[currency] || ''} - {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
