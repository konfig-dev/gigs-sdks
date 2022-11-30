# Gigs Node SDK

### Getting Started

```typescript
// 1) Initialize client with your API key and project name
const gigs = new GigsClient({
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
```

### Pagination

```typescript
const gigs = new GigsClient({
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
```
