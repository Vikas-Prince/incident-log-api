// tests/routes.test.js

const request = require("supertest");
const app = require("../src/app");

describe("Health Check Route", () => {
  it("should return 200 OK for health check", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "OK");
  });
});
