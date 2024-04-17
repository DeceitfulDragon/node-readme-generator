const fs = require('fs');
const inquirer = require('inquirer');

// Questions for inquirer
const questions = [    
{
    type: 'input',
    name: 'projectTitle',
    message: 'Enter your project title:'
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:'
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    // these seem to be popular
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC']
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
}];

// Stringing the readme together
function generateREADME(answers) {

}


// Write the readme to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated the ReadMe File!')
    );
}

// Initialization function
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            // File name, file content
            writeToFile('README.md', readmeContent);
        });
}

// Call the initialization function
init();
