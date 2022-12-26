class Calculator {
    /**
     * Calculates the Monthly Mortgage Price, Down Payment, Total Number of Payments and Pricipal Amount.
     * @param {Number} price Property Price must be a number. Price must be a positive number.
     * @param {Number} rate Interest Rate must be a positive number. This is what the lender charges you to lend you the money. Interest rates are expressed as an annual percentage.
     * @param {Number} period Period must be a positive number. Must in years. Must be less than 100.
     * @param {Number} downPaymentPerc Down Payment Percentage must be in number. Must be between 1-99.
     * @param {undefined|Number} annualTax (optional) Annual Tax must be a number. Price must be a positive number.
     * @param {undefined|Number} additionalFees (optional) Additional Monthly Fees must be a number. Price must be a positive number.
     * @return {Object} Returns an object.
     */
    calculate (price, rate, period, downPaymentPerc, annualTax, additionalFees) {
        try {
            if (!price || typeof price !== 'number' || price<=0) throw new Error("Price must be a positive number greater than 0.");
            if (!rate || typeof rate !== 'number' || rate<=0) throw new Error("Interest Rate must be a positive number greater than 0.");
            if (!period || typeof period !== 'number' || period<=0 || period>=100) throw new Error("Period must be a positive number. Must in years. Must be less than 100 and greater than 0");
            if (!downPaymentPerc || typeof downPaymentPerc !== 'number' || downPaymentPerc<1 || downPaymentPerc>99) throw new Error("Down Payment Percentage must be in number. Must be between 1-99.");
            if (annualTax && (typeof annualTax !== 'number' || annualTax<=0)) throw new Error("Annual Tax must be a number. Value must be a positive number.");
            if (additionalFees && (typeof additionalFees !== 'number' || additionalFees<=0)) throw new Error("Additional Monthly Fees must be a number. Value must be a positive number.");

            price = +(+price).toFixed(2);
            let r = (rate / 100) / 12;
            let n = period * 12;
            let downPayment = price * (downPaymentPerc / 100);
            let principal = price - downPayment;
            let M = principal * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
            let totalMonthly = M;
            let monthlyTax = 0;
            let additionalMonthlyFees = 0;
            if (annualTax) {
                monthlyTax = +((+annualTax / 12).toFixed(2));
                totalMonthly += monthlyTax;
            }
            if (additionalFees) {
                additionalMonthlyFees = +(additionalFees.toFixed(2));
                totalMonthly += additionalMonthlyFees;
            }
            let result = {
                monthlyMortageInt: Math.ceil(M),
                monthlyMortageDecimal: M.toFixed(2),
                principalInt: Math.ceil(principal),
                principalDecimal: principal.toFixed(2),
                totalNoOfPayments: n,
                downPaymentInt: Math.ceil(downPayment),
                downPaymentDecimal: downPayment.toFixed(2),
                additionalMonthlyFeesInt: Math.ceil(additionalMonthlyFees),
                additionalMonthlyFeesDecimal: additionalMonthlyFees.toFixed(2),
                monthlyTaxInt: Math.ceil(monthlyTax),
                monthlyTaxDecimal: monthlyTax.toFixed(2),
                totalMonthlyInt: Math.ceil(totalMonthly),
                totalMonthlyDecimal: totalMonthly.toFixed(2)
            };

            return result;
        } catch (error) {
            return error;
        }
    };


    /**
     * Calculates the Down Payment Value/Price.
     * @param {Number} price Property Price must be a number. Price must be a positive number.
     * @param {Number} downPaymentPerc Down Payment Percentage must be in number. Must be between 1-99.
     * @return {Object} Returns an object.
     */
    downPaymentValue (price, downPaymentPerc) {
        try {
            if (!price || typeof price !== 'number' || price<=0) throw new Error("Price must be a positive number greater than 0.");
            if (!downPaymentPerc || typeof downPaymentPerc !== 'number' || downPaymentPerc<1 || downPaymentPerc>99) throw new Error("Down Payment Percentage must be in number. Must be between 1-99.");

            price = +(+price).toFixed(2);
            let downPayment = price * (downPaymentPerc / 100);
            let principal = price - downPayment;
            let result = {
                principalInt: Math.ceil(principal),
                principalDecimal: principal.toFixed(2),
                downPaymentInt: Math.ceil(downPayment),
                downPaymentDecimal: downPayment.toFixed(2)
            };

            return result;
        } catch (error) {
            return error;
        }
    };


    /**
     * Calculates the Down Payment Percentage.
     * @param {Number} price Property Price must be a number. Price must be a positive number.
     * @param {Number} downPaymentPrice Down Payment Price must be in number. Price must be greater than 0 and less than original price.
     * @return {Object} Returns an object.
     */
     downPaymentPerc (price, downPaymentPrice) {
        try {
            if (!price || typeof price !== 'number' || price<=0) throw new Error("Price must be a positive number greater than 0.");
            if (!downPaymentPrice || typeof downPaymentPrice !== 'number' || downPaymentPrice<=0 || downPaymentPrice>=price) throw new Error("Down Payment Price must be a positive number greater than 0 and less than original price.");

            price = +(+price).toFixed(2);
            downPaymentPrice = +(+downPaymentPrice).toFixed(2);
            let downPayment = downPaymentPrice;
            let principal = price - downPayment;
            let downPaymentPerc = +(((downPayment / price) * 100).toFixed(2));
            let result = {
                principalInt: Math.ceil(principal),
                principalDecimal: principal.toFixed(2),
                downPaymentInt: Math.ceil(downPayment),
                downPaymentDecimal: downPayment.toFixed(2),
                downPaymentPerc: downPaymentPerc
            };

            return result;
        } catch (error) {
            return error;
        }
    };
};

module.exports = new Calculator();