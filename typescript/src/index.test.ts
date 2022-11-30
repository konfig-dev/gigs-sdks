import { GigsClient } from "./GigsClient";

it("getting started", async () => {
  // 1) Initialize a configuration with your API key
  const gigs = new GigsClient({
    BASE: "http://localhost:4010",
    TOKEN: "MyAuthToken",
  }).project("MyProject");

  // 2) Creating a user
  const user = await gigs.users.create({
    requestBody: {
      email: "ross@geller.com",
      fullName: "Ross Geller",
    },
  });

  // 3) Selecting a Plan
  const plan = (await gigs.plans.list({})).data.items[0];

  // 4) Creating a User Address
  const userAddress = await gigs.userAddresses.create({
    user: user.id,
    requestBody: {
      line1: "90 Bedford Street",
      city: "New York City",
      country: "USA",
    },
  });

  // 5) Creating a Subscription
  const subscription = await gigs.subscriptions.create({
    requestBody: {
      plan: plan.id,
      user: user.id,
      userAddress: userAddress.id,
    },
  });
  console.log(subscription);

  // 6) Waiting for activation of eSIM
  let status = await gigs.subscriptions.retrieve({
    id: subscription.id,
  });
  while (status.sim?.status !== subscription.status) {
    status = await gigs.subscriptions.retrieve({
      id: subscription.id,
    });
  }
  console.log("eSIM is active!");
});

it("pagination", async () => {
  const gigs = new GigsClient({
    BASE: "http://localhost:4010",
    TOKEN: "MyAuthToken",
  });

  // Paginate until the end
  let pageNumber = 0;
  const firstPage = await gigs.devices.deviceModelsList({});
  let nextPage = await firstPage.next();
  while (nextPage !== null) {
    pageNumber++;
    nextPage = await nextPage.next();
  }

  console.log(`Paginated ${pageNumber} times`);
});
