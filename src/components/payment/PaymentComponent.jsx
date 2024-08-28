import React, { useContext } from "react";
import { Web3Context } from "./Web3Context";
import { ethers } from "ethers";

const PaymentComponent = () => {
    const { web3, account } = useContext(Web3Context);

    const handlePayment = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Replace with your contract address and ABI
            const contractAddress =
                "0x0Bd2E1BB12306aFeb9c37A725B7542e9947e7b4f";
            const contractABI = [
                /* ... your contract ABI */
            ];
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );

            // Call your contract function to process the payment
            const tx = await contract.makePayment(account, ethers.parseEther("0.0005"), null);

            await tx.wait();

            // Handle successful payment
            console.log("Payment successful!");
        } catch (error) {
            console.error("Payment failed:", error);
        }
    };

    return <button onClick={handlePayment}>Pay Now</button>;
};

export default PaymentComponent;
