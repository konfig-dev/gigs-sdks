import { GigsClient } from "./GigsClient";
import { subscription } from "./models/subscription";

const PROJECT = "MyProject";

describe("getting started", () => {
  it("basic use case", async () => {
    const client = new GigsClient({ TOKEN: "MyAuthToken" });
    const user = await client.users.usersCreate({
      project: PROJECT,
      requestBody: {
        email: "test@test.com",
      },
    });
    const plan = (
      await client.plans.plansList({
        project: PROJECT,
      })
    ).items[0];
    const userAddress = await client.userAddresses.userAddressesCreate({
      project: PROJECT,
      user: user.id,
      requestBody: {
        line1: "90 Bedford Street",
        city: "New York City",
        country: "USA",
      },
    });
    const subscription = await client.subscriptions.subscriptionsCreate({
      project: PROJECT,
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
});
