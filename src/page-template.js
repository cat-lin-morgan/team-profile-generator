const generateEmployee = () => {
    return ``
}

<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><-- employee name here --></div>
    <div class="card-body text-dark">
      <h5 class="card-title"><-- icon and employee title here--></h5>
      <ul class="card-text">
          <il>ID: </il>
          <il>toemail:</il>
          <il>github</il>
      </ul>
    </div>
  </div>

// main html template
const generatePage = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profiles</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <link rel="stylesheet" href="./src/style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
            <-- all the cards will go here -->
            </main>
        </body>
        </html>
    `
}