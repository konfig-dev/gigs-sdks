import { GigsClient } from "./GigsClient";

describe("getting started", () => {
  it("basic use case", () => {
    const client = new GigsClient()
    client.users.usersCreate("myProject", {email: "test@test.com"})
  });
});
