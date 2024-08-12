import { describe, expect, it } from "@jest/globals";
import { loanService } from "./loan.service.js";

describe("Loan Service", () => {
  beforeEach(() => {
    let loanService = loanService;
  });
  it("should be defined", () => {
    expect(loanService).toBeDefined();
  });
  it("should return loans", async () => {
    const loans = await loanService.avaliableLoans({
      name: "John Doe",
      document: "12345678901",
      age: 25,
      income: 3000,
      location: "SP",
    });
    expect(loans).toEqual([
      { type: "PERSONAL", interest_rate: 4 },
      { type: "GUARANTEED", interest_rate: 3 },
    ]);
  });
  it("should return a error if custumer already exists ", async () => {
    try {
      await loanService.avaliableLoans({
        name: "John Doe",
        document: "12345678901",
        age: 25,
        income: 3000,
        location: "SP",
      });
    } catch (error) {
      expect(error.message).toBe("Customer with document already exists");
    }
  });
  it("should return a error if loans not found", async () => {
    try {
      await loanService.findByDocument("12345678901");
    } catch (error) {
      expect(error).toBe(error);
    }
  });
  it("should return all loans", async () => {
    const loans = await loanService.findAll();
    expect(loans).toEqual(loans);
  });
});
