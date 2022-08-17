
const fs = require("fs");

function generateHTML(teamData) {
  console.log(teamData);
  const generatePage = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Builder</title>
    </head>
    <body>
      <header class="head">
        <h1>My Team</h1>
      </header>
      <section class="flexParent">
        <!--Placeholder, will generate dynamically-->
        ${teamData.map((employee) => {
          return `
          <div class="box">
            <div class="heading">
                <h2>${employee.name}</br><span>${employee.getRole()}</span></h2>
            </div>
            <div class="content">
              <div class="id">ID: ${employee.id}</div>
              <div class="email" > Email: <a href="mailto:${employee.email}">${
            employee.email
          }</a></div>
            ${employee.getSpecialCall()}
            </div>
          </div>
          `;
        })}
  
      
      </section>
    </body>
  </html>
  `;

  fs.writeFile("./dist/index.html", generatePage, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated HTML");
    }
  });
  fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated CSS");
    }
  });
}

module.exports = generateHTML;
