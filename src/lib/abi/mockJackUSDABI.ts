export const mockJackUSDABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_avsDirectory",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_stakeRegistry",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_rewardsCoordinator",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_delegationManager",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_underlyingUSD",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "allTaskHashes",
        "inputs": [
            {
                "name": "",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allTaskResponses",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "avsDirectory",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "completeOfframp",
        "inputs": [
            {
                "name": "task",
                "type": "tuple",
                "internalType": "struct IJackRampServiceManager.Task",
                "components": [
                    {
                        "name": "channelId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "transactionId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "requestOfframpId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "receiver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "taskCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            },
            {
                "name": "referenceTaskIndex",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "signature",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createAVSRewardsSubmission",
        "inputs": [
            {
                "name": "rewardsSubmissions",
                "type": "tuple[]",
                "internalType": "struct IRewardsCoordinator.RewardsSubmission[]",
                "components": [
                    {
                        "name": "strategiesAndMultipliers",
                        "type": "tuple[]",
                        "internalType": "struct IRewardsCoordinator.StrategyAndMultiplier[]",
                        "components": [
                            {
                                "name": "strategy",
                                "type": "address",
                                "internalType": "contract IStrategy"
                            },
                            {
                                "name": "multiplier",
                                "type": "uint96",
                                "internalType": "uint96"
                            }
                        ]
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "contract IERC20"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "startTimestamp",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "duration",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "decreaseAllowance",
        "inputs": [
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "subtractedValue",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deregisterOperatorFromAVS",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "fillOfframp",
        "inputs": [
            {
                "name": "requestOfframpId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "channelId",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "transactionId",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "newTask",
                "type": "tuple",
                "internalType": "struct IJackRampServiceManager.Task",
                "components": [
                    {
                        "name": "channelId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "transactionId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "requestOfframpId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "receiver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "taskCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getOperatorRestakedStrategies",
        "inputs": [
            {
                "name": "_operator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRestakeableStrategies",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "increaseAllowance",
        "inputs": [
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "addedValue",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "latestTaskNum",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "mint",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "offrampRequests",
        "inputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountRealWorld",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "channelAccount",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "channelId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "requestCreatedBlock",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "isCompleted",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "registerOperatorToAVS",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "operatorSignature",
                "type": "tuple",
                "internalType": "struct ISignatureUtils.SignatureWithSaltAndExpiry",
                "components": [
                    {
                        "name": "signature",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "expiry",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "requestOfframp",
        "inputs": [
            {
                "name": "params",
                "type": "tuple",
                "internalType": "struct IJackRampServiceManager.OfframpRequestParams",
                "components": [
                    {
                        "name": "user",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "amountRealWorld",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "channelAccount",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "channelId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rewardsInitiator",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setRewardsInitiator",
        "inputs": [
            {
                "name": "newRewardsInitiator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "stakeRegistry",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "underlyingUSD",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "updateAVSMetadataURI",
        "inputs": [
            {
                "name": "_metadataURI",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "withdraw",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FillOfframp",
        "inputs": [
            {
                "name": "requestOfframpId",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "receiver",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "proof",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "reclaimProof",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Initialized",
        "inputs": [
            {
                "name": "version",
                "type": "uint8",
                "indexed": false,
                "internalType": "uint8"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Mint",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NewOfframpRequestCreated",
        "inputs": [
            {
                "name": "taskIndex",
                "type": "uint32",
                "indexed": true,
                "internalType": "uint32"
            },
            {
                "name": "task",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct IJackRampServiceManager.Task",
                "components": [
                    {
                        "name": "channelId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "transactionId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "requestOfframpId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "receiver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "taskCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NewTaskCreated",
        "inputs": [
            {
                "name": "taskIndex",
                "type": "uint32",
                "indexed": true,
                "internalType": "uint32"
            },
            {
                "name": "task",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct IJackRampServiceManager.Task",
                "components": [
                    {
                        "name": "channelId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "transactionId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "requestOfframpId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "receiver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "taskCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RequestOfframp",
        "inputs": [
            {
                "name": "requestOfframpId",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "params",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct IJackRampServiceManager.NewOfframpRequest",
                "components": [
                    {
                        "name": "user",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "amountRealWorld",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "channelAccount",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "channelId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "requestCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RewardsInitiatorUpdated",
        "inputs": [
            {
                "name": "prevRewardsInitiator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "newRewardsInitiator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TaskResponded",
        "inputs": [
            {
                "name": "taskIndex",
                "type": "uint32",
                "indexed": true,
                "internalType": "uint32"
            },
            {
                "name": "task",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct IJackRampServiceManager.Task",
                "components": [
                    {
                        "name": "channelId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "transactionId",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "requestOfframpId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "receiver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "taskCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "CallerNotOperator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OfframpRequestAlreadyCompleted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OfframpRequestAlreadyExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OfframpRequestAmountIsZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OfframpRequestChannelAccountIsEmpty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OfframpRequestChannelIdIsEmpty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OfframpRequestDoesNotExist",
        "inputs": []
    }
]