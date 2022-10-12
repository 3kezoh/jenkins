import app from "../src";
import request from "supertest";

describe("app", () => {
  it("should return Hello", async () => {
    const { text } = await request(app).get("/");

    expect(text).toStrictEqual("Hello");
  });
});
