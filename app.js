// function welcome(){
//     let userAnswer = prompt('Hello! Welcome to my Sweet Potato Fan Page! Answer "yes" if you\'re ready to learn more');
//     console.log ('First Response was: ' + userAnswer);
//         if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() ==='"yes"') {
//             document.write('Welcome fellow Sweetie!')
//         // } else if (userAnswer.toLowerCase() === '"yes"') {
//         //     document.write('Welcome fellow Sweetie!')
//         } else (userAnswer = prompt('Oops! You misspelled "yes". Let\'s try again') {
//             console.log ('Second Response was: ' + userAnswer);
//             if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() ==='"yes"');
//             document.write('Welcome fellow Sweetie!')
//             }
//             // } if (userAnswer.toLowerCase() == 'yes') {
//             //     document.write('Welcome fellow Sweetie!')
//             // } else if (userAnswer.toLowerCase() == '"yes"') {
//             //     document.write('Welcome fellow Sweetie!')
//             } else {                       
//                 document.write('Oops! You misspelled "yes" again or maybe you meant to visit the Team Russet fanpage linked below. Either way, spend a moment here, and you will become a fanatic of the amazing sweet potato!')
//             }
//         }}

function welcome() {
    let userAnswer = prompt('Hello! Welcome to my Sweet Potato Fan Page! Answer "yes" if you\'re ready to learn more');
    console.log('First Response was: ' + userAnswer);

    if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === '"yes"') {
        document.write('Welcome fellow Sweetie!');
    } else {
        userAnswer = prompt('Oops! You misspelled "yes". Let\'s try again');
        console.log('Second Response was: ' + userAnswer);

        if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === '"yes"') {
            document.write('Welcome fellow Sweetie!');
        } else {
            document.write('Uh oh! You misspelled "yes" again or maybe you meant to visit the Team Russet fanpage linked below. Either way, spend a moment here, and you will become a fanatic of the amazing sweet potato!');
        }
    }
}


function taterAge(){
    let userAnswer = prompt('Did you know that the average sweet potato plant is 300 years old!? Want to find out your age in sweet potato years? Enter your age (numerals only, please) and click the button below!');
    console.log ('Age Response was: ' + userAnswer);
    return parseInt(userAnswer) / 4;
}