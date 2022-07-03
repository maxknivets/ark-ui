import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask"
import { WalletConnect } from "@web3-react/walletconnect"
import { URLS } from "./constants";

const coinbase = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: URLS[5][0],
        appName: "Ark Protocol"
      },
    })
);

const walletconnect = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: URLS
      },
    })
);

const metamask = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));

const connectors = { coinbase, walletconnect, metamask };

export default connectors;