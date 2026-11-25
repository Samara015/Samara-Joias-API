const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

let mongoServer;
let client;
let db;

async function conectarBanco() {
    mongoServer = await MongoMemoryServer.create();

    const uri = mongoServer.getUri();

    client = new MongoClient(uri);

    await client.connect();

    db = client.db("samara_joias");

    console.log("MongoDB conectado com sucesso!");

    return db;
}

function obterBanco() {
    if (!db) {
        throw new Error("Banco de dados não conectado.");
    }

    return db;
}

async function fecharBanco() {
    if (client) {
        await client.close();
        client = null;
    }

    if (mongoServer) {
        await mongoServer.stop();
        mongoServer = null;
    }

    db = null;
}

module.exports = {
    conectarBanco,
    obterBanco,
    fecharBanco
};