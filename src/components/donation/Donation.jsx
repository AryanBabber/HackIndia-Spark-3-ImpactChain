import React, { useContext, useState } from "react";
import { ethers } from "ethers";
// import { Web3Context } from "../../context/web3.context";

const Donation = () => {
    // const { web3, account } = useContext(Web3Context);

    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const contractAddress = "0x0Bd2E1BB12306aFeb9c37A725B7542e9947e7b4f";
    // const contractABI = [
    //     /* ... your contract ABI */
    // ];

    const handleDonate = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // if (!web3 || !account) {
            //   setError('Please connect MetaMask');
            //   setIsLoading(false);
            //   return;
            // }

            const provider = new ethers.AlchemyProvider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                contractAddress,
                null, // contractABI
                signer
            );

            // Replace with your contract's donation function and parameters
            const tx = await contract.donate(ethers.parseEther(amount));
            await tx.wait();

            console.log("Donation successful!");
            // Optionally clear the amount field and display a success message
            setAmount("");
            setIsLoading(false);
        } catch (error) {
            console.error("Donation failed:", error);
            setError(error.message || "Donation failed");
            setIsLoading(false);
        }
    };

    return (
        <div className="donation-container">
            <h2>Support Samatva</h2>
            <p>Your donation will help us continue our work.</p>
            <input
                type="number"
                placeholder="Enter Donation Amount (ETH)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
            />
            <button onClick={handleDonate} disabled={isLoading}>
                {isLoading ? "Donating..." : "Donate"}
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Donation;
