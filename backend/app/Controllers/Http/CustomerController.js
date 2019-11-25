"use strict";

const CustomerModel = use("App/Models/Customer");

class CustomerController {
  async all({ request, response }) {
    let status = 200;
    let customers = await CustomerModel.all();
    if (!customers) {
      status = 404;
      customers = [];
    }

    return response.status(status).json(customers);
  }

  async create({ request, response }) {
    let status = 200;
    const params = request.only(["name", "email", "gender"]);
    const customer = await CustomerModel.create(params);
    return response.status(status).json(customer);
  }

  async find({ params, response }) {
    let status = 200;
    let customer = [];
    if (!params.id) {
      status = 400;
      customer = "Você deve fornecer um ID para buscar.";
    } else {
      customer = await CustomerModel.find(params.id);

      if (!customer) {
        status = 404;
        customer = "Nenhum registro encontrado.";
      }
    }

    return response.status(status).json(customer);
  }
}

module.exports = CustomerController;
