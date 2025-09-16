
import { rpc, TransactionBuilder, BASE_FEE, Networks, nativeToScVal, Keypair, Contract, scValToNative } from "@stellar/stellar-sdk";

const privateKey = "SDVMR725PBSAL3AINDZDOIQAC56PEQLUPJLSLK7RJ4OUIWVN524FFME7";
const xlmContract = "CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC";
const marketplaceContract = "CA22K2BNEKDPGOC2VSRK3RG5D6DO5EMNCD6GXOWMT3SUMALVYL4AANFL";
const oracleContract = "CCMWSYMWTCOT6TPC5NNM5YVNUK7VMIIFQ2LTNXQ6VT4EIWXKGGQUNXKP";
const tokenSymbol = "Ener";

const server = new rpc.Server("https://soroban-testnet.stellar.org/");

export async function approve_xlm(amount: number) {
    console.log("approve call")
    const keypair = Keypair.fromSecret(privateKey);

    // USDC contract on testnet
    const contract = new Contract(xlmContract);

    const account = await server.getAccount(keypair.publicKey());

    const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(
            contract.call(
                "approve",
                nativeToScVal(keypair.publicKey(), { type: "address" }), // from
                nativeToScVal(marketplaceContract, { type: "address" }), // spender
                nativeToScVal(amount * 10000000, { type: "i128" }), // amount 
                nativeToScVal(955457, { type: "u32" }), // expiration-ledger 
            )
        )
        .setTimeout(30)
        .build();

    const preparedTx = await server.prepareTransaction(transaction);
    preparedTx.sign(keypair);

    const result = await server.sendTransaction(preparedTx);
    await waitForTransaction(result.hash)
    return result.hash;
}

export async function mint_token_with_xlm(amount: number) {
    console.log("mint call")
    const keypair = Keypair.fromSecret(privateKey);

    // USDC contract on testnet
    const contract = new Contract(marketplaceContract);

    const account = await server.getAccount(keypair.publicKey());

    const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(
            contract.call(
                "mint_with_usdt",
                nativeToScVal(keypair.publicKey(), { type: "address" }), // from
                nativeToScVal(tokenSymbol, { type: "symbol" }), // spender
                nativeToScVal(amount * 10000000, { type: "i128" }), // amount 
            )
        )
        .setTimeout(30)
        .build();

    const preparedTx = await server.prepareTransaction(transaction);
    preparedTx.sign(keypair);

    const result = await server.sendTransaction(preparedTx);
    await waitForTransaction(result.hash)
    return result.hash;
}

export async function get_token_price(symbol: string) {
    console.log("token price call")
    const keypair = Keypair.fromSecret(privateKey);

    // USDC contract on testnet
    const contract = new Contract(oracleContract);

    // Simulate the transaction to get the price from the oracle contract
    const tx = new TransactionBuilder(await server.getAccount(keypair.publicKey()), {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(
            contract.call("get_price", nativeToScVal(symbol, { type: "symbol" }))
        )
        .setTimeout(30)
        .build();

    // Simulate the transaction (not send)
    const response = await server.simulateTransaction(tx);
    console.log("Preço -------");
    console.log(response);

    // The result is in response.retval, convert from SCVal to JS value
    const result = scValToNative((response as any).result.retval);

    // result deve ser [i128, u64]
    const [price, ts] = result;
    console.log("Preço:", price.toString());
    console.log("Timestamp:", ts.toString());

    return { price, ts };
}

async function waitForTransaction(hash: string) {
    while (true) {
        const res = await server.getTransaction(hash);

        if (res.status === "SUCCESS") {
            console.log("✅ Confirmado no ledger:", res);
            return res;
        }

        if (res.status === "FAILED") {
            throw new Error("❌ Transação falhou: " + JSON.stringify(res));
        }

        // status = NOT_FOUND ou PENDING → espera e tenta de novo
        await new Promise(r => setTimeout(r, 2000));
    }
}
