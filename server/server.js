const express = require("express");
const cors = require("cors");
const faker = require("@faker-js/faker").faker;
const app = express();
const port = 3000;

app.use(cors());

function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    address: {
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      timezone: faker.address.timeZone(),
    },
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    visitCount: faker.random.numeric(),
    lifetimeSpend: faker.finance.amount(0, 1000, 2),
  };
}

app.get("/guests", (req, res) => {
  // TODO: add option to specify count of guests to return
  res
    .status(200)
    .json({ guests: Array.from({ length: 10 }).map(createRandomUser) });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
