import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  console.log(amountInputId);
  return (
    <div className={`bg-white p-3 text-sm rounded-lg flex ${className}`}>
      <div className="w-1/2">
        <label
          className="text-black/40 inline-block mb-2 py-1.5"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent"
          type="number"
          id={amountInputId}
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-black/40  mb-2 w-full" htmlFor="">
          Currency type
        </label>
        <select
          className="bg-gray-100 rounded-lg outline-none cursor-pointer p-1"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
