const generateManager = (manager) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${manager.getRole()}</h5>
            <ul class="card-text">
                <il>ID: ${manager.getId()}</il>
                <il>Email: ${manager.getEmail()}</il>
                <il>Office Number: ${manager.getOfficeNumber()}</il>
            </ul>
        </div>
    </div>
    `
}

const generateEngineer = (engineer) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${engineer.getRole()}</h5>
            <ul class="card-text">
                <il>ID: ${engineer.getId()}</il>
                <il>Email: ${engineer.getEmail()}</il>
                <il>Github: ${engineer.getGithub()}</il>
            </ul>
        </div>
    </div>
    `
}

const generateIntern = (intern) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${intern.getRole()}</h5>
            <ul class="card-text">
                <il>ID: ${intern.getId()}</il>
                <il>Email: ${intern.getEmail()}</il>
                <il>School: ${intern.getSchool()}</il>
            </ul>
        </div>
    </div>
    `
}

// main html template
const generatePage = (team) => {
    const {manager, staff} = team;
    let staffHtml = '';
    staff.forEach((staffMember) => {
        // console.log(staffMember);
        if (staffMember.getRole() === 'Engineer') {
            staffHtml += generateEngineer(staffMember);
        } else if (staffMember.getRole() === 'Intern') {
            staffHtml += generateIntern(staffMember);
        }
    });
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profiles</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
            ${generateManager(manager)}
            ${staffHtml}
            </main>
        </body>
        </html>
    `
}

module.exports = generatePage;