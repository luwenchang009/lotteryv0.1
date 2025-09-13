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
        "indexed": true,
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

const connectButton = document.getElementById('connectBtn');
const statusText = document.getElementById('status');
const contractAddressText = document.getElementById('contractAddress');
const currentRoundIdText = document.getElementById('currentRoundId');

const betBigBtn = document.getElementById('betBigBtn');
const betSmallBtn = document.getElementById('betSmallBtn');
const betAmountInput = document.getElementById('betAmount');

const drawBtn = document.getElementById('drawBtn');
const claimBtn = document.getElementById('claimBtn');
const startNewRoundBtn = document.getElementById('startNewRoundBtn');

const resultMessage = document.getElementById('resultMessage');

let signer = null;
let provider = null;
let lotteryContract = null;
let tokenContract = null;
let currentRoundId = 0;

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

const setup = async () => {
    if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        statusText.textContent = "Connected to MetaMask";

        try {
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            lotteryContract = new ethers.Contract(lotteryContractAddress, lotteryContractABI, signer);
            tokenContract = new ethers.Contract(tokenContractAddress, tokenABI, signer);

            contractAddressText.textContent = lotteryContractAddress;
            updateRoundInfo();

        } catch (error) {
            statusText.textContent = "MetaMask not connected. Please connect.";
            console.error("Error connecting to MetaMask:", error);
        }
    } else {
        statusText.textContent = "MetaMask not detected. Please install.";
    }
};

const updateRoundInfo = async () => {
    if (lotteryContract) {
        try {
            const id = await lotteryContract.currentRoundId();
            currentRoundId = id.toNumber();
            currentRoundIdText.textContent = currentRoundId;
        } catch (error) {
            console.error("Error fetching current round ID:", error);
        }
    }
};

const handleBet = async (isBig) => {
    if (!signer || !lotteryContract || !tokenContract) {
        resultMessage.textContent = "Please connect to MetaMask first.";
        return;
    }

    try {
        const betAmountWei = ethers.utils.parseEther(betAmountInput.value);

        // First, check allowance
        const allowance = await tokenContract.allowance(await signer.getAddress(), lotteryContractAddress);
        if (allowance.lt(betAmountWei)) {
            resultMessage.textContent = "Insufficient allowance. Please approve the contract first.";
            // You could add logic here to prompt for approval
            return;
        }

        const betTx = isBig 
            ? await lotteryContract.betBig(currentRoundId, betAmountWei)
            : await lotteryContract.betSmall(currentRoundId, betAmountWei);

        await betTx.wait();
        resultMessage.textContent = `Bet placed successfully! Transaction hash: ${betTx.hash}`;
        updateRoundInfo();

    } catch (error) {
        resultMessage.textContent = `Error placing bet: ${error.message}`;
        console.error(error);
    }
};

const handleDraw = async () => {
    if (!lotteryContract) return;

    try {
        const drawTx = await lotteryContract.draw(currentRoundId);
        await drawTx.wait();
        resultMessage.textContent = `Lottery drawn! Transaction hash: ${drawTx.hash}`;
        updateRoundInfo();
    } catch (error) {
        resultMessage.textContent = `Error drawing lottery: ${error.message}`;
        console.error(error);
    }
};

const handleClaim = async () => {
    if (!lotteryContract) return;

    try {
        const claimTx = await lotteryContract.claim(currentRoundId);
        await claimTx.wait();
        resultMessage.textContent = `Prize claimed! Transaction hash: ${claimTx.hash}`;
    } catch (error) {
        resultMessage.textContent = `Error claiming prize: ${error.message}`;
        console.error(error);
    }
};

const handleStartNewRound = async () => {
    if (!lotteryContract) return;

    try {
        const startTx = await lotteryContract.startNextRound();
        await startTx.wait();
        resultMessage.textContent = `New round started! Transaction hash: ${startTx.hash}`;
        updateRoundInfo();
    } catch (error) {
        resultMessage.textContent = `Error starting new round: ${error.message}`;
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', setup);
betBigBtn.addEventListener('click', () => handleBet(true));
betSmallBtn.addEventListener('click', () => handleBet(false));
drawBtn.addEventListener('click', handleDraw);
claimBtn.addEventListener('click', handleClaim);
startNewRoundBtn.addEventListener('click', handleStartNewRound);