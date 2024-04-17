const fs = require('fs');
const inquirer = require('inquirer');

// Questions for inquirer
const questions = [];

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
