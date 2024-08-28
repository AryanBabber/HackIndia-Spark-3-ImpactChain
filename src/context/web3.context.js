// Web3Context.js (Optional)
import React, { createContext, useState, useEffect } from "react";
import Web3 from "web3";

const Web3Context = createContext();

const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [chainId, setChainId] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                const provider = new Web3.providers.HttpProvider(
                    window.ethereum
                );
                const web3 = new Web3(provider);
                setWeb3(web3);

                try {
                    const accounts = await web3.eth.getAccounts();
                    setAccount(accounts[0]);
                } catch (error) {
                    console.error("User denied account access");
                }

                window.ethereum.on("accountsChanged", (accounts) => {
                    setAccount(accounts[0]);
                });

                window.ethereum.on("chainChanged", (_chainId) => {
                    setChainId(_chainId);
                });
            }
        };

        initWeb3();
    }, []);

    return (
        <Web3Context.Provider value={{ web3, account, chainId }}>
            {children}
        </Web3Context.Provider>
    );
};

export { Web3Context, Web3Provider };
