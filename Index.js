const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generateHtml.js');

//inquirer will go here
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must give a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID?",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must give an ID!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must give an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: (officeNumberInput) => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('You must give an office number!');
                    return false;
                }
            },
        }
    ])
};

const staffQuestions = (team) => {
    console.log(`
    =======================
    Add a New Staff Member
    =======================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must give a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must give an ID!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must give an email!');
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role does this employee play?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your School?',
            when: (member) => {
                return member.role === 'Intern'
            },
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You must give a school!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            when: (member) => {
                return member.role === 'Engineer'
            },
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must give a username!');
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false,
        },
    ]).then(
        employee => {
            if (employee.role === 'Intern') {
                const {name, id, email, school} = employee;
                team.staff.push(new Intern(name, id, email, school))
            } else if (employee.role === 'Engineer') {
                const {name, id, email, github} = employee;
                team.staff.push(new Engineer(name, id, email, github))
            }

            if (employee.confirmAddEmployee) {
                return staffQuestions(team)
            } else {
                return team;
            }
        }
    )
};


//function that creates rest of team member

managerQuestions()
    .then(managerAnswers => {
        const {name, id, email, officeNumber} = managerAnswers;
        const manager = new Manager(name, id, email, officeNumber);

        return {
            manager,
            staff: [],
        }
    })
    .then(staffQuestions)
    .then(generatePage)
    .then( (html) => writeFile(html))
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileReponse => {
        console.log(copyFileReponse);
    })
    .catch(err => {
        console.log(err);
    });

