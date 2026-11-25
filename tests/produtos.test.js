jest.setTimeout(120000);

const request = require("supertest");
const app = require("../app");
const { conectarBanco, fecharBanco } = require("../database");

describe("Testes da API de Produtos", () => {

    beforeAll(async () => {
        await conectarBanco();
        await app.prepararBanco();
    });

    afterAll(async () => {
        await fecharBanco();
    });

    test("Deve listar os produtos cadastrados", async () => {
        const resposta = await request(app).get("/produtos");

        expect(resposta.status).toBe(200);
        expect(resposta.body).toBeInstanceOf(Array);
        expect(resposta.body.length).toBeGreaterThan(0);
    });

});