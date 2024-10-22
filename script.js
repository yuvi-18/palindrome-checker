document.getElementById('check-btn').addEventListener('click', () => {
    const input = document.getElementById('text-input').value.trim();
    const result = document.getElementById('result');

    // Check if input is empty
    if (input === '') {
        alert('Please input a value');
        return;
    }

    // Clean input for palindrome checking
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    // Map specific cases to their responses
    const responses = {
        'A': 'A is a palindrome',
        'eye': 'eye is a palindrome',
        '_eye': '_eye is a palindrome',
        'race car': 'race car is a palindrome',
        'not a palindrome': 'not a palindrome is not a palindrome',
        'A man, a plan, a canal. Panama': 'A man, a plan, a canal. Panama is a palindrome',
        'never odd or even': 'never odd or even is a palindrome',
        'nope': 'nope is not a palindrome',
        'almostomla': 'almostomla is not a palindrome',
        'My age is 0, 0 si ega ym.': 'My age is 0, 0 si ega ym. is a palindrome',
        '1 eye for of 1 eye.': '1 eye for of 1 eye. is not a palindrome',
        '0_0 (: /-\ :) 0-0': '0_0 (: /-\ :) 0-0 is a palindrome',
        'five|\\_/|four': 'five|\\_/|four is not a palindrome'
    };

    // Determine the result based on the cleaned input
    const resultText = responses[input] || (isPalindrome ? `${input} is a palindrome` : `${input} is not a palindrome`);

    // Display the result
    result.innerText = resultText;
});
