import { GigsClient } from "./GigsClient";

describe("getting started", () => {
  it("basic use case", async () => {
    const gigs = new GigsClient({ TOKEN: "MyAuthToken" }).project("MyProject");
    const user = await gigs.users.create({
      requestBody: {
        email: "test@test.com",
      },
    });
    const plan = (await gigs.plans.list({})).data.items[0];
    const userAddress = await gigs.userAddresses.create({
      user: user.id,
      requestBody: {
        line1: "90 Bedford Street",
        city: "New York City",
        country: "USA",
      },
    });
    const subscription = await gigs.subscriptions.create({
      requestBody: {
        plan: plan.id,
        user: user.id,
        userAddress: userAddress.id,
      },
    });

    console.log(subscription);

    // let status = await client.subscriptions.subscriptionsRetrieve({
    //   project: PROJECT,
    //   id: subscription.id,
    // });
    // while (status.sim.status !== subscription.status) {
    //   status = await client.subscriptions.subscriptionsRetrieve({
    //     project: PROJECT,
    //     id: subscription.id,
    //   });
    // }
    // console.log("eSIM is active!");
  });

  it("pagination", async () => {
    const gigs = new GigsClient({ TOKEN: "MyAuthToken" });
    const test = async () => {
      let i = 0;
      let page = await gigs.devices.deviceModelsList({});
      let next = await page.next();
      while (next !== null) {
        i++;
        next = await next.next();
      }
      console.log(i);
    };
    for (const x in Array(200).fill("a")) {
      await test();
    }
  });
});
