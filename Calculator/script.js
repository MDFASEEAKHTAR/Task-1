function calculateAge() {
    // input values
    const day = document.getElementById("dobDay").value;
    const month = document.getElementById("dobMonth").value - 1; // Month is 0-indexed
    const year = document.getElementById("dobYear").value;

    // today's date
    const today = new Date();

    // Create a Date object for the user's birthdate
    const birthDate = new Date(year, month, day);

    // Calculate age in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if the birthday has not occurred yet this year
    const isBirthdayPassed = today.getMonth() > month || (today.getMonth() === month && today.getDate() >= day);

    if (!isBirthdayPassed) {
        age--;
    }

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You are : ${age} years old.`;
}
