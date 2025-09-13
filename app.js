// Replace these with your actual contract addresses
const lotteryContractAddress = "YOUR_LOTTERY_CONTRACT_ADDRESS_HERE";
const tokenContractAddress = "YOUR_TOKEN_CONTRACT_ADDRESS_HERE";

// Replace with your contract's ABI (from Remix or Polygonscan)
const lotteryContractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "big",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "BetBigSmall",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payout",
          "type": "uint256"
        }
      ],
      "name": "Claim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "resultBig",
          "type": "bool"
        }
      ],
      "name": "Draw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "closeBlock",
          "type": "uint256"
        }
      ],
      "name": "NewRound",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "betBig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "betSmall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        }
      ],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentRoundId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        }
      ],
      "name": "draw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getBet",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "big",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "small",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        }
      ],
      "name": "getRound",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "closeBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "drawBlock",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "drawn",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "resultBig",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "totalBig",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalSmall",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startNextRound",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const tokenABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  
// Corrected to use Ethers v6 syntax
let provider;
let signer;
let lotteryContract;
let tokenContract;

const lotteryAddress = "0xb8c1d8f2ef5fb49720d2a9f99f77cf72e0e4c5da"; // REPLACE WITH YOUR LOTTERY ADDRESS
const tokenAddress = "0xAbFb8ED551Adf686a8C02A6b575c5bcA9b770b4E"; // REPLACE WITH YOUR TOKEN ADDRESS

const statusEl = document.getElementById('status');
const currentRoundIdEl = document.getElementById('currentRoundId');
const betAmountEl = document.getElementById('betAmount');
const resultMessageEl = document.getElementById('resultMessage');

document.getElementById('betBigBtn').addEventListener('click', () => handleBet(true));
document.getElementById('betSmallBtn').addEventListener('click', () => handleBet(false));
document.getElementById('drawBtn').addEventListener('click', handleDraw);
document.getElementById('claimBtn').addEventListener('click', handleClaim);
document.getElementById('startNewRoundBtn').addEventListener('click', handleStartNewRound);

const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
        alert("MetaMask is not installed. Please install it to use this Dapp.");
        return;
    }
    
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        lotteryContract = new ethers.Contract(lotteryAddress, lotteryContractABI, signer);
        tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
        
        statusEl.textContent = `Connected: ${await signer.getAddress()}`;
        updateRoundInfo();
    } catch (error) {
        console.error("Failed to connect wallet:", error);
        statusEl.textContent = "Failed to connect to MetaMask.";
    }
};

const updateRoundInfo = async () => {
    if (!lotteryContract) return;
    try {
        const roundId = await lotteryContract.currentRoundId();
        currentRoundIdEl.textContent = roundId.toString();
    } catch (error) {
        console.error("Error fetching round info:", error);
    }
};

const handleBet = async (isBig) => {
    if (!signer) {
        alert("Please connect your wallet first.");
        return;
    }

    try {
        const amount = ethers.utils.parseUnits(betAmountEl.value, 18);
        const roundId = await lotteryContract.currentRoundId();

        const betTx = isBig 
            ? await lotteryContract.betBig(roundId, amount)
            : await lotteryContract.betSmall(roundId, amount);

        resultMessageEl.textContent = "Waiting for bet transaction to confirm...";
        await betTx.wait();
        resultMessageEl.textContent = `Bet successful! Tx: ${betTx.hash}`;
        updateRoundInfo();
    } catch (error) {
        console.error(error);
        resultMessageEl.textContent = `Error: ${error.message}`;
    }
};

const handleDraw = async () => {
    if (!signer) return;

    try {
        const roundId = await lotteryContract.currentRoundId();
        const drawTx = await lotteryContract.draw(roundId);
        resultMessageEl.textContent = "Waiting for draw transaction to confirm...";
        await drawTx.wait();
        resultMessageEl.textContent = `Draw successful! Tx: ${drawTx.hash}`;
        updateRoundInfo();
    } catch (error) {
        console.error(error);
        resultMessageEl.textContent = `Error: ${error.message}`;
    }
};

const handleClaim = async () => {
    if (!signer) return;

    try {
        const roundId = await lotteryContract.currentRoundId();
        const claimTx = await lotteryContract.claim(roundId);
        resultMessageEl.textContent = "Waiting for claim transaction to confirm...";
        await claimTx.wait();
        resultMessageEl.textContent = `Claim successful! Tx: ${claimTx.hash}`;
    } catch (error) {
        console.error(error);
        resultMessageEl.textContent = `Error: ${error.message}`;
    }
};

const handleStartNewRound = async () => {
    if (!signer) return;

    try {
        const startTx = await lotteryContract.startNextRound();
        resultMessageEl.textContent = "Waiting for new round transaction to confirm...";
        await startTx.wait();
        resultMessageEl.textContent = `New round started! Tx: ${startTx.hash}`;
        updateRoundInfo();
    } catch (error) {
        console.error(error);
        resultMessageEl.textContent = `Error: ${error.message}`;
    }
};

connectWallet();
