import { loanRepository } from "./repositories/loan.repository.js";

const avaliableLoans = async ({ name, document, age, income, location }) => {
  try {
    let customer = await loanRepository.findByDocument(document);
    if (document.length > 11 || document.length > 14) {
      throw new Error("Customer with document already exists");
    }
    if (!customer) {
      customer = await loanRepository.createLoan({
        name,
        document,
        age,
        income,
        location,
      });
    }
    const loans = [];
    if (
      income <= 3000 ||
      (income > 3000 && income <= 5000 && age < 30 && location === "SP")
    ) {
      loans.push({ type: "PERSONAL", interest_rate: 4 });
      loans.push({ type: "GUARANTEED", interest_rate: 3 });
    }
    // Regras para Empréstimo Consignado
    if (income >= 5000) {
      loans.push({ type: "CONSIGNMENT", interest_rate: 2 });
    }
    return loans;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

const findByDocument = async (document) => {
  try {
    const loans = await loanRepository.findByDocument(document);
    if (loans) {
      throw new Error("Loans not found");
    }
    return loans;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

const findAll = async () => {
  try {
    const loans = await loanRepository.findAll();
    return loans;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

export const loanService = {
  avaliableLoans,
  findAll,
  findByDocument,
};
