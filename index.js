
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../Develop/utils/generateMarkdown.js');


const questions = [
    {
        type: 'input',
        message: 'Enter a title for your README',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your application.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If necessary, how do you install the application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is the application used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Any collaborators, third-party assets, or tutorials followed? ',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Add tests, if any, for your application.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license.',
        choices: ['Apache license 2.0', 'Artistic License 2.0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International',
        'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution License (BY)',
        'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 
        'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Eclipse Public License 1.0', 
        'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3','GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 
        'ISC License (ISC)', 'MIT License', 'Mozilla Public License 2.0', 'Open Database License (ODbL)', 
        'Public Domain Dedication and License (PDDL)', 'Perl License', 'SIL Open Font License 1.1', 'The Hippocratic License 2.1', 
        'The Hippocratic License 3.0', 'The Unlicense', 'Do What the Fuck You Want to Public License', 'The zlib/libpng License', 
        'no license'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide your GitHub',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'Please provide your email.',
        name: 'email',
    },
];


inquirer
    .prompt(questions)
    .then((data) => {
        const createFile = generateMarkdown(data);

        fs.writeFile('README', createFile, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Write file success!");
            }
        });
});

function writeToFile (fileName, data) {

    const { generateMarkdown } = fileName;
    const { title, description, installation, usage, credits, test, license, GitHub, email } =  data;

}

// TODO: Create a function to initialize app
function init() { 
}

init();
