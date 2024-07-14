import React, { createContext, useContext, useState, useEffect } from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

const WalletContext = createContext();

const projectId = '8daff15d9bd05ab04cf88f81d80629e4';

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

const metadata = {
  name: 'Tezsure',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: '...',
  defaultChainId: 1
});

export const WalletProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const web3Modal = createWeb3Modal({
      ethersConfig,
      chains: [mainnet],
      projectId,
      enableAnalytics: true
    });

    const checkWalletConnection = async () => {
      try {
        const { provider } = await web3Modal.connect();
        if (provider) {
          console.log('Wallet connected');
          setWalletConnected(true);
        }
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    };

    const button = document.querySelector('w3m-button');
    if (button) {
      button.addEventListener('click', checkWalletConnection);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', checkWalletConnection);
      }
    };
  }, []);

  return (
    <WalletContext.Provider value={{ walletConnected, setWalletConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
