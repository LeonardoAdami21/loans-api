import prisma from "../../config/prisma.config.js";

const createLoan = async (data) => {
  return await prisma.loans.create({
    data
  });
};
const findAll = async () => {
  return await prisma.loans.findMany();
};

const findByDocument = async (document) => {
  return await prisma.loans.findFirst({
    where: {
      document,
    },
  });
};

export const loanRepository = {
  createLoan,
  findAll,
  findByDocument,
};
