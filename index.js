// Users should be able to:

// - Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
// - See form validation messages if any field is incomplete
// - Complete the form only using their keyboard
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

"use strict";

// Formulas:
// Mortgage term in Months
const morgageInMonths = mortgageTermInYears * 12;

// How much interest is paid each month
const monthlyInterestPayment = mortgageAmount * (annualInterestRate / 12);

// How much interest is paid over the entire term
const interestOverTerm = monthlyInterestPayment * morgageInMonths;

// Monthly payment including interest
const monthlyPaymentWithInterest =
	mortgageAmount / morgageInMonths + monthlyInterestPayment;

// Total repayment over the entire term including interest
const repaymentOverTerm = monthlyPaymentWithInterest * morgageInMonths;

// Dom Selectors
const clearBtn = document.querySelector(".clear-btn");
const mortgageAmountInput = document.querySelector("#mortgage-amount");
const mortgageTermInput = document.querySelector("#mortgage-term");
const interestRateInput = document.querySelector("#interest-rate");
const typeRepaymentInput = document.querySelector("#repayment");
const typeInterestOnlyInput = document.querySelector("#interest-only");
const calculateBtn = document.querySelector(".calculate-btn");
const monthlyRepaymentsDisplay = document.querySelector(
	".monthly-repayments-display-value"
);
const totalRepaymentsDisplay = document.querySelector(
	".total-repayments-display-value"
);
