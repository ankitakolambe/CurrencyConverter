import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;

/*The code defines a custom React Hook 
called `useCurrencyInfo`, which takes a currency code as an argument.
 Inside this hook, it initializes a state variable `data` using `useState`.
  Within the `useEffect` hook, it fetches currency information from an external API based on the provided currency code. 
  When the data is successfully fetched and parsed, it updates the `data` state with this information.
   The `useEffect` hook is triggered whenever the `currency` parameter changes. 
   The code also logs the `data` state, but due to the asynchronous nature of state updates, 
   the logged data may not always reflect the latest state immediately.*/