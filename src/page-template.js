const generateManager = (manager) => {
    return `
    <div class ="col col-xs-12 col-sm-12 col-md-6 col-lg-3">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">${manager.getName()}</div>
            <div class="card-body text-dark">
                <h5 class="card-title"><i class="fab fa-fort-awesome-alt"></i> ${manager.getRole()}</h5>
                <ul class="list-group">
                    <il class="list-group-item">ID: ${manager.getId()}</il>
                    <il class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:${manager.getEmail()}">${manager.getName()}'s Email</a></il>
                    <il class="list-group-item"><i class="fa fa-phone-square" aria-hidden="true"></i> Office Number: ${manager.getOfficeNumber()}</il>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateEngineer = (engineer) => {
    return `
    <div class ="col col-xs-12 col-sm-12 col-md-6 col-lg-3">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">${engineer.getName()}</div>
            <div class="card-body text-dark">
                <h5 class="card-title"><i class="fas fa-file-code"></i> ${engineer.getRole()}</h5>
                <ul class="list-group">
                    <il class="list-group-item">ID: ${engineer.getId()}</il>
                    <il class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getName()}'s Email</a></il>
                    <il class="list-group-item"><i class="fab fa-github"></i> Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getName()}'s Github</a></il>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateIntern = (intern) => {
    return `
    <div class ="col col-xs-12 col-sm-12 col-md-6 col-lg-3">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">${intern.getName()}</div>
            <div class="card-body text-dark">
                <h5 class="card-title"><i class="fas fa-copy"></i> ${intern.getRole()}</h5>
                <ul class="list-group">
                    <il class="list-group-item">ID: ${intern.getId()}</il>
                    <il class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i>Email: <a href="mailto:${intern.getEmail()}">${intern.getName()}'s Email</a></il>
                    <il class="list-group-item"><i class="fa fa-book" aria-hidden="true"></i> School: ${intern.getSchool()}</il>
                </ul>
            </div>
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
                <div class="row">
                        ${generateManager(manager)}
                        ${staffHtml}
                </div>
            </main>
        </body>
        <script src="https://use.fontawesome.com/releases/v5.14.0/js/all.js" data-auto-replace-svg="nest"></script>
        </html>
    `
}

module.exports = generatePage;