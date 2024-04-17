const fs = require('fs');
const inquirer = require('inquirer');

// Badges for the licenses, more can be added if extra licenses are needed
const licenseBadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GNU GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
};


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
function generateReadme(returnedAnswers) {
    // This took way too much trial and error
    // Probably could've found something online to copy and paste, then altered
    return `
    # ${returnedAnswers.projectTitle}
    
    ${licenseBadges[returnedAnswers.license]}
    
    ## Description
    ${returnedAnswers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Testing](#tests)
    - [Questions](#questions)
    
    ## Installation
    \`\`\`
    ${returnedAnswers.installation}
    \`\`\`
    
    ## Usage
    ${returnedAnswers.usage}
    
    ## License
    This project is licensed under the ${returnedAnswers.license}
    
    ## Contributing
    ${returnedAnswers.contribution}
    
    ## Testing
    \`\`\`
    ${returnedAnswers.tests}
    \`\`\`
    
    ## Questions
    For any questions, contact me @ [${returnedAnswers.email}](mailto:${returnedAnswers.email}).
    My GitHub: [${returnedAnswers.githubUsername}](https://github.com/${returnedAnswers.githubUsername})
    `;
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
            const readmeContent = generateReadme(answers);
            // File name, file content
            writeToFile('README.md', readmeContent);
        });
}

// Call the initialization function
init();
