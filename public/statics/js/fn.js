function ageCalculate(yearOfBirth) {
    const today = new Date();
    const thisYear = today.getFullYear();
    return thisYear - yearOfBirth;
}