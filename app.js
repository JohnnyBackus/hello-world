// some JS lecture notes as I follow along

// A variable is a container for information (data)

// 4 ways to declare a variable...

// 1. let
// 2. cont
// 3. var <-- Don't use this
// 4. (none) <-- Don't use this

// const --> a constant, unchangeable variable
// let --> can be changed later on

// DATA TYPE
// strings: text - has quitation marks
    // 'Kassie' -- '32' -- 'Hello world'

// boolean: True Or False

// number: no quotation marks
    // 32

// = is an assignment operator; it is not the same as a math function
    // == is the math function and can be used to evaluate if a statement is True
        // let x = 5
        // let y = 10
        // x == y returns False

        // let x = 5
        // let y = '5'
        // x==y returns True (LOOSELY equivalent)
        //  x===y returns False (STRICTLY equivalent; DATA TYPES must match)

// SOME COMMANDS TO LEARN

// alert('INSERT TEXT HERE'); -- This creates a pop up dialog box
// const userAnswer = prompt('INSERT PROMPT/QUESTION HERE'); -- Creates a query dialog box and stores the response as a variable called 'userAnswer'
// console.log('user typed: ' + userAnswer); -- Allows you to easily view user response to prompt in webpage console
    // 'user typed: ' is optional, but allows you to easily identify the use input in the browser console
// document.write('INSERT TEXT HERE'); -- Adds text to webpage wherever you insert a script tag into the html file


// CONDITIONAL LOGIC
// If () {} -- space in between for readability
    // If (this is True) then execute {command}
    //  if (x==y) {
    //     console.log('Yes it is')
    //  } else {
    //     console.log('No it is not')
    //  }

// else if () {} allows for more response commands that are specific to an input (or range of inputs)
// else () {} allows for repsonses to all other input 