//required modules
const fs = require('fs');
const inquirer = require('inquirer');
const genSVG = require('./lib/shapes');

// I can enter up to three characters
function validLength(input){
    return (input.length != 3)? console.log(' Keep your letters between 1 and 3 characters.'): true
}

function validInput(input){
    return (input='')?console.log('Please enter a valid character'): true
}

// I am prompted for the [text color, shape, shapes color, text]
const questions = [
    {
        name: 'letters',
        type: 'input',
        message: 'Please enter three characters for your logo.',
        validate: validLength 
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Which shape would you like to choose for your logo?',
        choices: ['Square', 'Circle', 'Triangle', 'Star'] // list from shapes.
    },
    {
        name:'font',
        type:'input',
        message: 'What color would you like your letters to be? (for hex, add #)',
        validate: validInput
    },
    {
        name: 'color',
        type: 'input',
        message: 'What color would you like your shape to be? (for hex, add #)',
        validate: validInput
    }
];

//Passing questions into inquirer for build
// inquirer prompt => then (like module 9)
// instead the questions are split into a seperate const for readability.
function passQuestions(){
    inquirer.prompt(questions).then(data=>{
        buildSVG(`${data.shape}Logo.svg`,genSVG(data))
    })
}

// write file.
function buildSVG(file_name, data){
    fs.writeFile(`./${file_name}`,data,(err)=>{
        if (err){
            console.log(err)
        }else{
            console.log('Successfully created your logo!')
        }
    })
}

passQuestions();