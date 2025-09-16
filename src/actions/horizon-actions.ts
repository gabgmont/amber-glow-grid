import { Horizon } from "@stellar/stellar-sdk";
import { Asset } from "@stellar/stellar-sdk";

const server = new Horizon.Server("https://horizon-testnet.stellar.org");

// Par XLM/USDC
const xlmAsset = Asset.native(); // XLM
const usdcAsset = new Asset(
  "USDC",
  "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5" // emissor do USDC no testnet
);

export async function getXLMPrice() {
  const orderbook = await server.orderbook(xlmAsset, usdcAsset).call();

  // Melhor oferta de venda (quanto USDC alguém quer em troca de 1 XLM)
  const bestAsk = parseFloat(orderbook.asks[0].price); 
  // Melhor oferta de compra (quanto USDC alguém oferece por 1 XLM)
  const bestBid = parseFloat(orderbook.bids[0].price);

  console.log("Preço de venda (ask):", bestAsk);
  console.log("Preço de compra (bid):", bestBid);

  // Preço médio
  const midPrice = (bestAsk + bestBid) / 2;
  console.log("Preço médio XLM/USD:", midPrice);

  return midPrice;
}