import { loanService } from "./loan.service.js";

const create = async (req, res) => {
  const { name, document, age, income, location } = req.body;

  try {
    const loans = await loanService.avaliableLoans({
      name,
      document,
      age,
      income,
      location,
    });
    return res.status(201).send({
      customer: name,
      loans,
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const loans = await loanService.findAll();
    return res.status(200).send(loans);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const loanController = {
  findAll,
  create,
};
