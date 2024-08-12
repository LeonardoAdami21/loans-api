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
    return res.status(201).json({
      customer: name,
      loans,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const loans = await loanService.findAll();
    return res.status(200).json(loans);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const loanController = {
  findAll,
  create,
};
