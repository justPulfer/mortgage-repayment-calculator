// Users should be able to:

// - Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
// - See form validation messages if any field is incomplete
// - Complete the form only using their keyboard
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

"use strict";

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

// error spans
const mortgageAmountError = document.querySelector(".mortgage-amount-error");
const mortgageTermError = document.querySelector(".mortgage-term-error");
const interestRateError = document.querySelector(".interest-rate-error");
const mortgageTypeError = document.querySelector(".mortgage-type-error");

// input tags
const mortgageAmountInputTag = document.querySelector(
	"#mortgage-amount-input-tag"
);
const mortgageTermInputTag = document.querySelector("#mortgage-term-input-tag");
const interestRateInputTag = document.querySelector("#interest-rate-input-tag");

// FORMULAE
// Mortgage term in Months
const mortgageTermInMonths = Number(mortgageTermInput.value) * 12;

// Monthly interest rate
const monthlyInterestRate = Number(interestRateInput.value / 100) / 12;

const principalAmount = Number(mortgageAmountInput.value);

// FUNCTIONS

// _________Interests Only ________ //

// monthly interest only function
const calcMonthlyInterestOnly = (principal, rate) =>
	(principal * rate).toFixed(2);

// interest over term function
const calcInterestOverTerm = (monthlyPayment, term, principal) =>
	(monthlyPayment * term - principal).toFixed(2);

//__________________________ //

// ________Repayment ________ //

// Monthly payment with interest function
const calcMonthlyPayment = (principal, term, rate) =>
	(
		(principal * (rate * (1 + rate) ** term)) /
		((1 + rate) ** term - 1)
	).toFixed(2);

// monthly payment value
const monthlyPayment = calcMonthlyPayment(
	principalAmount,
	mortgageTermInMonths,
	monthlyInterestRate
);

// total payment over term function
const calcPaymentOverTerm = (term) => (monthlyPayment * term).toFixed(2);

//__________________________ //

console.log(
	"Monthly Interest Only:",
	calcMonthlyInterestOnly(principalAmount, monthlyInterestRate)
);
console.log(
	"Interest Over Term:",
	calcInterestOverTerm(monthlyPayment, mortgageTermInMonths, principalAmount)
);
console.log(
	"Monthly Payment:",
	calcMonthlyPayment(principalAmount, mortgageTermInMonths, monthlyInterestRate)
);
console.log("Payment Over Term:", calcPaymentOverTerm(mortgageTermInMonths));

// displayError
const displayError = (span, input, inputTag, errorMessage) => {
	span.textContent = errorMessage;
	input.parentElement.classList.add("input-border-error");
	inputTag.classList.add("input-tag-error");
};

// clear errors
const clearErrors = (span, input, inputTag) => {
	span.textContent = "";
	input.parentElement.classList.remove("input-border-error");
	inputTag.classList.remove("input-tag-error");
};

// VALIDATIONS

const validator = (span, input, inputTag, errorMessage) => {
	if (!input.value) {
		displayError(span, input, inputTag, errorMessage);
	} else if (input.value < 0) {
		displayError(span, input, inputTag, `Invalid ${input.name}`);
	} else {
		clearErrors(span, input, inputTag);
	}
};

// EVENT LISTENERS

mortgageAmountInput.addEventListener("input", () => {
	validator(
		mortgageAmountError,
		mortgageAmountInput,
		mortgageAmountInputTag,
		"This field is required"
	);
});

mortgageTermInput.addEventListener("input", () => {
	validator(
		mortgageTermError,
		mortgageTermInput,
		mortgageTermInputTag,
		"This field is required"
	);
});

interestRateInput.addEventListener("input", () => {
	validator(
		interestRateError,
		interestRateInput,
		interestRateInputTag,
		"This field is required"
	);
});

// calculate button
calculateBtn.addEventListener("click", () => {
	console.log("calculate");
});
