import { describe, expect, it, jest } from "@jest/globals";
import { loanController } from "./loan.contoller.js";

describe("Loan Controller", () => {
  beforeEach(() => {
    let loanController = loanController;
  });
  it("should be defined", () => {
    expect(loanController).toBeDefined();
  });

  it("should return loans", async () => {
    const req = {
      body: {
        name: "John Doe",
        document: "12345678901",
        age: 25,
        income: 3000,
        location: "SP",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await loanController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      customer: "John Doe",
      loans: [
        { type: "PERSONAL", interest_rate: 4 },
        { type: "GUARANTEED", interest_rate: 3 },
      ],
    });
  });
  it("should return a error if custumer already exists ", async () => {
    try {
      const req = {
        body: {
          name: "John Doe",
          document: "12345678901",
          age: 25,
          income: 3000,
          location: "SP",
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      await loanController.create(req, res);
    } catch (error) {
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "Customer with document already exists",
      });
    }
  });
});
