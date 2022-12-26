# @iamniel/mortgage-calculator

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
  
  ## Description
  This is simple property mortage calculator library. The calculus behind mortgage payments is complicated, but the Mortgage Calculator makes this math problem quick and easy.
<br />
<br />

## Table of Contents

  * [Installation](#installation)
  * [Methods](#methods)
  * [Usage](#usage)
  * [calculate (Method)](#calculatemethod)
  * [downPaymentValue (Method)](#downpaymentvaluemethod)
  * [downPaymentPerc (Method)](#downpaymentpercmethod)
  * [Contributing](#contributing)

<br />
<br />

## Installation
```bash
npm install @iamniel/mortgage-calculator
```

<br />

## Methods
- calculate
- downPaymentValue
- downPaymentPerc

<br />

## Usage
```js
const calculator = require("@iamniel/mortgage-calculator");
calculator.downPaymentValue(4100, 20);
```
<br />


## calculate(Method)
```js
const calculator = require("@iamniel/mortgage-calculator");
// calculator.calculate(price, rate, period, downPaymentPerc, annualTax, additionalFees);
calculator.calculate(4100, 4.5, 25, 20);
```
> Parameters:
* price: (Required) Property Price must be a number. Price must be a positive number.
* rate: (Required) Interest Rate must be a positive number. This is what the lender charges you to lend you the money. Interest rates are expressed as an annual percentage.
* period: (Required) Period must be a positive number. Must in years. Must be less than 100.
* downPaymentPerc: (Required) Down Payment Percentage must be in number. Must be between 1-99.
* annualTax: (optional) Annual Tax must be a number. Price must be a positive number.
* additionalFees: (optional) Additional Monthly Fees must be a number. Price must be a positive number.

<br />

## downPaymentValue(Method)
```js
const calculator = require("@iamniel/mortgage-calculator");
// calculator.downPaymentValue(price, downPaymentPerc);
calculator.downPaymentValue(4100, 20);
```
> Parameters:
* price: (Required) Property Price must be a number. Price must be a positive number.
* downPaymentPerc: (Required) Down Payment Percentage must be in number. Must be between 1-99.

<br />

## downPaymentPerc(Method)
```js
const calculator = require("@iamniel/mortgage-calculator");
// calculator.downPaymentPerc(price, downPaymentPrice);
calculator.downPaymentPerc(4100, 820);
```
> Parameters:
* price: (Required) Property Price must be a number. Price must be a positive number.
* downPaymentPrice: (Required) Down Payment Price must be in number. Price must be greater than 0 and less than original price.

<br />
<br />

## Contributing
Feel free to fork this repo and make it your own! If you think your changes could be widely used, submit a pull request!
