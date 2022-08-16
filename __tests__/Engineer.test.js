const Engineer = require("../lib/Engineer");

test("Creates engineer object", () => {
  const engineer = new Engineer("engine", "54867", "email", "4Charlie4");

  expect(engineer.name).toBe("engine");
  expect(engineer.id).toBe("54867");
  expect(engineer.email).toBe("email");
  expect(engineer.github).toBe("4Charlie4");
});

test("links to github page", () => {
  const engineer = new Engineer("engine", "54867", "email", "4Charlie4");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining("https://github.com/4Charlie4")
  );
});

test("returns the role 'Engineer'", () => {
  const engineer = new Engineer("engine", "54867", "email", "4Charlie4");

  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
