
function dayRate(ratePerHour) {
    // assigned to variable for less ambiguity on computation
    const workHoursPerDay = 8;
    return ratePerHour * workHoursPerDay;
}

// console.log(dayRate(89))

// const daysInBudget = (a, b) => Math.floor(a/b)/8
// console.log(daysInBudget(20000, 89))

const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const billableDaysPerMonth = 22;
    const discountRate = 1 - discount
    const excessDays = numDays % billableDaysPerMonth;

    const finalRate = (dayRate(ratePerHour) * (numDays - excessDays) * discountRate) + (dayRate(ratePerHour) * excessDays);
    return Math.ceil(finalRate);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))
console.log("🤯")