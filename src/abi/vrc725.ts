export const ABI_VRC725=[
    {
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "initBaseURI",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "issuer",
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
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "newBaseURI",
                "type": "string"
            }
        ],
        "name": "BaseURIUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "issuer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Fee",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "bool[]",
                "name": "status",
                "type": "bool[]"
            }
        ],
        "name": "MintersUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mintMulti",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "permitForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newBaseURI",
                "type": "string"
            }
        ],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "minters",
                "type": "address[]"
            },
            {
                "internalType": "bool[]",
                "name": "isActives",
                "type": "bool[]"
            }
        ],
        "name": "setMinters",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
        "inputs": [],
        "name": "baseURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isMinter",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "issuer",
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
        "name": "minFee",
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
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonceByAddress",
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
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "nonces",
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
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
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
        "name": "PERMIT_FOR_ALL_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
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
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
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
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
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
]

export const BYTECODE_VRC725="60806040523480156200001157600080fd5b506040516200599a3803806200599a833981810160405281019062000037919062000435565b6001601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160129081620000a091906200074f565b50620000b4848483620000be60201b60201c565b50505050620008b9565b600360149054906101000a900460ff161562000111576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001089062000897565b60405180910390fd5b620001238383620001cb60201b60201c565b6200016a836040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250620001fb60201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600360146101000a81548160ff021916908315150217905550505050565b8160089081620001dc91906200074f565b508060099081620001ee91906200074f565b5060006001819055505050565b6200020d82826200021160201b60201c565b5050565b600082805190602001209050600082805190602001209050816004819055508060058190555050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002a6826200025b565b810181811067ffffffffffffffff82111715620002c857620002c76200026c565b5b80604052505050565b6000620002dd6200023d565b9050620002eb82826200029b565b919050565b600067ffffffffffffffff8211156200030e576200030d6200026c565b5b62000319826200025b565b9050602081019050919050565b60005b838110156200034657808201518184015260208101905062000329565b60008484015250505050565b6000620003696200036384620002f0565b620002d1565b90508281526020810184848401111562000388576200038762000256565b5b6200039584828562000326565b509392505050565b600082601f830112620003b557620003b462000251565b5b8151620003c784826020860162000352565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003fd82620003d0565b9050919050565b6200040f81620003f0565b81146200041b57600080fd5b50565b6000815190506200042f8162000404565b92915050565b6000806000806080858703121562000452576200045162000247565b5b600085015167ffffffffffffffff8111156200047357620004726200024c565b5b62000481878288016200039d565b945050602085015167ffffffffffffffff811115620004a557620004a46200024c565b5b620004b3878288016200039d565b935050604085015167ffffffffffffffff811115620004d757620004d66200024c565b5b620004e5878288016200039d565b9250506060620004f8878288016200041e565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200055757607f821691505b6020821081036200056d576200056c6200050f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000598565b620005e3868362000598565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620006306200062a6200062484620005fb565b62000605565b620005fb565b9050919050565b6000819050919050565b6200064c836200060f565b620006646200065b8262000637565b848454620005a5565b825550505050565b600090565b6200067b6200066c565b6200068881848462000641565b505050565b5b81811015620006b057620006a460008262000671565b6001810190506200068e565b5050565b601f821115620006ff57620006c98162000573565b620006d48462000588565b81016020851015620006e4578190505b620006fc620006f38562000588565b8301826200068d565b50505b505050565b600082821c905092915050565b6000620007246000198460080262000704565b1980831691505092915050565b60006200073f838362000711565b9150826002028217905092915050565b6200075a8262000504565b67ffffffffffffffff8111156200077657620007756200026c565b5b6200078282546200053e565b6200078f828285620006b4565b600060209050601f831160018114620007c75760008415620007b2578287015190505b620007be858262000731565b8655506200082e565b601f198416620007d78662000573565b60005b828110156200080157848901518255600182019150602085019450602081019050620007da565b868310156200082157848901516200081d601f89168262000711565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f5652433732353a20436f6e747261637420616c726561647920696e6974000000600082015250565b60006200087f601d8362000836565b91506200088c8262000847565b602082019050919050565b60006020820190508181036000830152620008b28162000870565b9050919050565b6150d180620008c96000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80635e5756d51161011a57806395d89b41116100ad578063b88d4fde1161007c578063b88d4fde146105ed578063c87b56dd14610609578063e985e9c514610639578063f2fde38b14610669578063f39df9e21461068557610206565b806395d89b4114610567578063a22cb46514610585578063aa271e1a146105a1578063ab84ee6f146105d157610206565b806370a08231116100e957806370a08231146104f3578063745a41bc1461052357806379ba50971461053f5780638da5cb5b1461054957610206565b80635e5756d5146104595780636352211e146104895780636a627842146104b95780636c0360eb146104d557610206565b806324ec75901161019d57806341bceced1161016c57806341bceced146103b757806342842e0e146103d35780634f6ccce7146103ef57806355f804b31461041f578063585956d61461043b57610206565b806324ec75901461032d5780632f745c591461034b57806330adf81f1461037b5780633644e5151461039957610206565b8063141a468c116101d9578063141a468c146102a557806318160ddd146102d55780631d143848146102f357806323b872dd1461031157610206565b806301ffc9a71461020b57806306fdde031461023b578063081812fc14610259578063095ea7b314610289575b600080fd5b61022560048036038101906102209190613378565b6106a1565b60405161023291906133c0565b60405180910390f35b61024361071b565b604051610250919061346b565b60405180910390f35b610273600480360381019061026e91906134c3565b6107ad565b6040516102809190613531565b60405180910390f35b6102a3600480360381019061029e9190613578565b6107f3565b005b6102bf60048036038101906102ba91906134c3565b6108fc565b6040516102cc91906135c7565b60405180910390f35b6102dd610961565b6040516102ea91906135c7565b60405180910390f35b6102fb61096e565b6040516103089190613531565b60405180910390f35b61032b600480360381019061032691906135e2565b610998565b005b6103356109f1565b60405161034291906135c7565b60405180910390f35b61036560048036038101906103609190613578565b6109fb565b60405161037291906135c7565b60405180910390f35b610383610aa0565b604051610390919061364e565b60405180910390f35b6103a1610ac4565b6040516103ae919061364e565b60405180910390f35b6103d160048036038101906103cc91906138a0565b610ad3565b005b6103ed60048036038101906103e891906135e2565b610b71565b005b610409600480360381019061040491906134c3565b610b91565b60405161041691906135c7565b60405180910390f35b610439600480360381019061043491906139cd565b610c02565b005b610443610cdc565b604051610450919061364e565b60405180910390f35b610473600480360381019061046e9190613a16565b610d00565b60405161048091906135c7565b60405180910390f35b6104a3600480360381019061049e91906134c3565b610d49565b6040516104b09190613531565b60405180910390f35b6104d360048036038101906104ce9190613a16565b610dcf565b005b6104dd610e81565b6040516104ea919061346b565b60405180910390f35b61050d60048036038101906105089190613a16565b610f0f565b60405161051a91906135c7565b60405180910390f35b61053d60048036038101906105389190613ae4565b610fc5565b005b6105476110e9565b005b6105516112c4565b60405161055e9190613531565b60405180910390f35b61056f6112ee565b60405161057c919061346b565b60405180910390f35b61059f600480360381019061059a9190613b67565b611380565b005b6105bb60048036038101906105b69190613a16565b61138f565b6040516105c891906133c0565b60405180910390f35b6105eb60048036038101906105e69190613ba7565b6113af565b005b61060760048036038101906106029190613ba7565b611539565b005b610623600480360381019061061e91906134c3565b611594565b604051610630919061346b565b60405180910390f35b610653600480360381019061064e9190613c2a565b6115fc565b60405161066091906133c0565b60405180910390f35b610683600480360381019061067e9190613a16565b611690565b005b61069f600480360381019061069a9190613578565b6117d3565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107145750610713826118a5565b5b9050919050565b60606008805461072a90613c99565b80601f016020809104026020016040519081016040528092919081815260200182805461075690613c99565b80156107a35780601f10610778576101008083540402835291602001916107a3565b820191906000526020600020905b81548152906001019060200180831161078657829003601f168201915b5050505050905090565b60006107b882611a57565b600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107fe82610d49565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590613d3c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108ae57506108ad81336115fc565b5b6108ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e490613dce565b60405180910390fd5b6108f78383611aa2565b505050565b600061090782611b5b565b610946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093d90613e3a565b60405180910390fd5b60066000838152602001908152602001600020549050919050565b6000600f80549050905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109a23382611b9c565b6109e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d890613ecc565b60405180910390fd5b6109ec838383611c31565b505050565b6000600154905090565b6000610a0683610f0f565b8210610a47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3e90613f5e565b60405180910390fd5b600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b6000610ace611f31565b905090565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5a90613fca565b60405180910390fd5b610b6d8282611f71565b5050565b610b8c83838360405180602001604052806000815250611539565b505050565b6000610b9b610961565b8210610bdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd39061405c565b60405180910390fd5b600f8281548110610bf057610bef61407c565b5b90600052602060002001549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8990613fca565b60405180910390fd5b8060129081610ca19190614257565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad81604051610cd1919061346b565b60405180910390a150565b7f29795620f29ed5790c945e3f419a1b3e2381aa07751ccffe5b81231639d74cd581565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600080610d5583612059565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbd90613e3a565b60405180910390fd5b80915050919050565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5290614375565b60405180910390fd5b6000610e65610961565b9050610e7d82600183610e7891906143c4565b612096565b5050565b60128054610e8e90613c99565b80601f0160208091040260200160405190810160405280929190818152602001828054610eba90613c99565b8015610f075780601f10610edc57610100808354040283529160200191610f07565b820191906000526020600020905b815481529060010190602001808311610eea57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f769061446a565b60405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b42821015611008576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fff906144d6565b60405180910390fd5b600061102985856006600088815260200190815260200160002054866120b4565b905060006110378284612117565b50509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561107e575061107d8186611b9c565b5b80611098575061109761109086610d49565b8385612173565b5b6110d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ce90614542565b60405180910390fd5b6110e18686611aa2565b505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611179576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611170906145d4565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600980546112fd90613c99565b80601f016020809104026020016040519081016040528092919081815260200182805461132990613c99565b80156113765780601f1061134b57610100808354040283529160200191611376565b820191906000526020600020905b81548152906001019060200180831161135957829003601f168201915b5050505050905090565b61138b338383612203565b5050565b60116020528060005260406000206000915054906101000a900460ff1681565b428210156113f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e9906144d6565b60405180910390fd5b600061143e84600760008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548561236f565b9050600061144c8284612117565b505090508573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806114915750611490868385612173565b5b6114d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c790614542565b60405180910390fd5b6114dc86866001612203565b600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061152c906145f4565b9190505550505050505050565b6115433383611b9c565b611582576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157990613ecc565b60405180910390fd5b61158e848484846123cf565b50505050565b606061159f82611a57565b60006115a961242b565b905060008151116115c957604051806020016040528060008152506115f4565b806115d3846124bd565b6040516020016115e4929190614678565b6040516020818303038152906040525b915050919050565b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611720576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171790613fca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361178f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117869061470e565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661185f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185690614375565b60405180910390fd5b60005b818110156118a0576000611874610961565b905061188c8460018361188791906143c4565b612096565b508080611898906145f4565b915050611862565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061197057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806119d857507f5604e225000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611a4057507ff5d3b8ba000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611a505750611a4f8261261d565b5b9050919050565b611a6081611b5b565b611a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9690613e3a565b60405180910390fd5b50565b81600b600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611b1583610d49565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008073ffffffffffffffffffffffffffffffffffffffff16611b7d83612059565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600080611ba883610d49565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611bea5750611be981856115fc565b5b80611c2857508373ffffffffffffffffffffffffffffffffffffffff16611c10846107ad565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611c5182610d49565b73ffffffffffffffffffffffffffffffffffffffff1614611ca7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c9e906147a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611d16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d0d90614832565b60405180910390fd5b611d238383836001612687565b8273ffffffffffffffffffffffffffffffffffffffff16611d4382610d49565b73ffffffffffffffffffffffffffffffffffffffff1614611d99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d90906147a0565b60405180910390fd5b600b600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560016000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555060016000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600a600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ec4816127e5565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611f2c8383836001612811565b505050565b6000611f6c7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611f5f612817565b611f67612821565b61282b565b905090565b60005b825181101561201b57818181518110611f9057611f8f61407c565b5b602002602001015160116000858481518110611faf57611fae61407c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080612013906145f4565b915050611f74565b507ff0943d46430c35cb3f9acbd9473c850354d9b72f362fd3978277597b0d356837828260405161204d9291906149ce565b60405180910390a15050565b6000600a600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6120b0828260405180602001604052806000815250612865565b5050565b600061210d7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad868686866040516020016120f2959493929190614a05565b604051602081830303815290604052805190602001206128c0565b9050949350505050565b6000806000604184510361215c5760008060006020870151925060408701519150606087015160001a905061214e888285856128da565b95509550955050505061216c565b60006002855160001b9250925092505b9250925092565b60008060006121828585612117565b50915091506000600381111561219b5761219a614a58565b5b8160038111156121ae576121ad614a58565b5b1480156121e657508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b806121f857506121f78686866129ce565b5b925050509392505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612271576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161226890614ad3565b60405180910390fd5b80600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161236291906133c0565b60405180910390a3505050565b60006123c67f29795620f29ed5790c945e3f419a1b3e2381aa07751ccffe5b81231639d74cd58585856040516020016123ab9493929190614af3565b604051602081830303815290604052805190602001206128c0565b90509392505050565b6123da848484611c31565b6123e684848484612af2565b612425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161241c90614baa565b60405180910390fd5b50505050565b60606012805461243a90613c99565b80601f016020809104026020016040519081016040528092919081815260200182805461246690613c99565b80156124b35780601f10612488576101008083540402835291602001916124b3565b820191906000526020600020905b81548152906001019060200180831161249657829003601f168201915b5050505050905090565b606060008203612504576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612618565b600082905060005b6000821461253657808061251f906145f4565b915050600a8261252f9190614bf9565b915061250c565b60008167ffffffffffffffff8111156125525761255161366e565b5b6040519080825280601f01601f1916602001820160405280156125845781602001600182028036833780820191505090505b5090505b600085146126115760018261259d9190614c2a565b9150600a856125ac9190614c5e565b60306125b891906143c4565b60f81b8183815181106125ce576125cd61407c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561260a9190614bf9565b9450612588565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61269384848484612c72565b60018111156126d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126ce90614d01565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff160361271e5761271981612d96565b61275d565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461275c5761275b8582612ddf565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361279f5761279a81612f4c565b6127de565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146127dd576127dc848261301d565b5b5b5050505050565b600660008281526020019081526020016000206000815480929190612809906145f4565b919050555050565b50505050565b6000600454905090565b6000600554905090565b60008383834630604051602001612846959493929190614d21565b6040516020818303038152906040528051906020012090509392505050565b61286f838361309c565b61287c6000848484612af2565b6128bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b290614baa565b60405180910390fd5b505050565b60006128d36128cd611f31565b836132b8565b9050919050565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c111561291a5760006003859250925092506129c4565b60006001888888886040516000815260200160405260405161293f9493929190614d90565b6020604051602081039080840390855afa158015612961573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036129b557600060016000801b935093509350506129c4565b8060008060001b935093509350505b9450945094915050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1685856040516024016129fd929190614e2a565b604051602081830303815290604052631626ba7e60e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051612a4f9190614e96565b600060405180830381855afa9150503d8060008114612a8a576040519150601f19603f3d011682016040523d82523d6000602084013e612a8f565b606091505b5091509150818015612aa357506020815110155b8015612ae75750631626ba7e60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051810190612ae59190614ed9565b145b925050509392505050565b6000612b138473ffffffffffffffffffffffffffffffffffffffff166132f9565b15612c65578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02338786866040518563ffffffff1660e01b8152600401612b579493929190614f06565b6020604051808303816000875af1925050508015612b9357506040513d601f19601f82011682018060405250810190612b909190614f67565b60015b612c15573d8060008114612bc3576040519150601f19603f3d011682016040523d82523d6000602084013e612bc8565b606091505b506000815103612c0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c0490614baa565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612c6a565b600190505b949350505050565b6001811115612d9057600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612d0557806000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612cfd9190614c2a565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612d8f57806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612d8791906143c4565b925050819055505b5b50505050565b600f805490506010600083815260200190815260200160002081905550600f81908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612dec84610f0f565b612df69190614c2a565b90506000600e6000848152602001908152602001600020549050818114612edb576000600d60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600d60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208190555081600e600083815260200190815260200160002081905550505b600e600084815260200190815260200160002060009055600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600f80549050612f609190614c2a565b90506000601060008481526020019081526020016000205490506000600f8381548110612f9057612f8f61407c565b5b9060005260206000200154905080600f8381548110612fb257612fb161407c565b5b90600052602060002001819055508160106000838152602001908152602001600020819055506010600085815260200190815260200160002060009055600f80548061300157613000614f94565b5b6001900381819060005260206000200160009055905550505050565b600061302883610f0f565b905081600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000208190555080600e600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361310b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131029061500f565b60405180910390fd5b61311481611b5b565b15613154576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161314b9061507b565b60405180910390fd5b613162600083836001612687565b61316b81611b5b565b156131ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131a29061507b565b60405180910390fd5b60016000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600a600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46132b4600083836001612811565b5050565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61335581613320565b811461336057600080fd5b50565b6000813590506133728161334c565b92915050565b60006020828403121561338e5761338d613316565b5b600061339c84828501613363565b91505092915050565b60008115159050919050565b6133ba816133a5565b82525050565b60006020820190506133d560008301846133b1565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156134155780820151818401526020810190506133fa565b60008484015250505050565b6000601f19601f8301169050919050565b600061343d826133db565b61344781856133e6565b93506134578185602086016133f7565b61346081613421565b840191505092915050565b600060208201905081810360008301526134858184613432565b905092915050565b6000819050919050565b6134a08161348d565b81146134ab57600080fd5b50565b6000813590506134bd81613497565b92915050565b6000602082840312156134d9576134d8613316565b5b60006134e7848285016134ae565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061351b826134f0565b9050919050565b61352b81613510565b82525050565b60006020820190506135466000830184613522565b92915050565b61355581613510565b811461356057600080fd5b50565b6000813590506135728161354c565b92915050565b6000806040838503121561358f5761358e613316565b5b600061359d85828601613563565b92505060206135ae858286016134ae565b9150509250929050565b6135c18161348d565b82525050565b60006020820190506135dc60008301846135b8565b92915050565b6000806000606084860312156135fb576135fa613316565b5b600061360986828701613563565b935050602061361a86828701613563565b925050604061362b868287016134ae565b9150509250925092565b6000819050919050565b61364881613635565b82525050565b6000602082019050613663600083018461363f565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6136a682613421565b810181811067ffffffffffffffff821117156136c5576136c461366e565b5b80604052505050565b60006136d861330c565b90506136e4828261369d565b919050565b600067ffffffffffffffff8211156137045761370361366e565b5b602082029050602081019050919050565b600080fd5b600061372d613728846136e9565b6136ce565b905080838252602082019050602084028301858111156137505761374f613715565b5b835b8181101561377957806137658882613563565b845260208401935050602081019050613752565b5050509392505050565b600082601f83011261379857613797613669565b5b81356137a884826020860161371a565b91505092915050565b600067ffffffffffffffff8211156137cc576137cb61366e565b5b602082029050602081019050919050565b6137e6816133a5565b81146137f157600080fd5b50565b600081359050613803816137dd565b92915050565b600061381c613817846137b1565b6136ce565b9050808382526020820190506020840283018581111561383f5761383e613715565b5b835b81811015613868578061385488826137f4565b845260208401935050602081019050613841565b5050509392505050565b600082601f83011261388757613886613669565b5b8135613897848260208601613809565b91505092915050565b600080604083850312156138b7576138b6613316565b5b600083013567ffffffffffffffff8111156138d5576138d461331b565b5b6138e185828601613783565b925050602083013567ffffffffffffffff8111156139025761390161331b565b5b61390e85828601613872565b9150509250929050565b600080fd5b600067ffffffffffffffff8211156139385761393761366e565b5b61394182613421565b9050602081019050919050565b82818337600083830152505050565b600061397061396b8461391d565b6136ce565b90508281526020810184848401111561398c5761398b613918565b5b61399784828561394e565b509392505050565b600082601f8301126139b4576139b3613669565b5b81356139c484826020860161395d565b91505092915050565b6000602082840312156139e3576139e2613316565b5b600082013567ffffffffffffffff811115613a0157613a0061331b565b5b613a0d8482850161399f565b91505092915050565b600060208284031215613a2c57613a2b613316565b5b6000613a3a84828501613563565b91505092915050565b600067ffffffffffffffff821115613a5e57613a5d61366e565b5b613a6782613421565b9050602081019050919050565b6000613a87613a8284613a43565b6136ce565b905082815260208101848484011115613aa357613aa2613918565b5b613aae84828561394e565b509392505050565b600082601f830112613acb57613aca613669565b5b8135613adb848260208601613a74565b91505092915050565b60008060008060808587031215613afe57613afd613316565b5b6000613b0c87828801613563565b9450506020613b1d878288016134ae565b9350506040613b2e878288016134ae565b925050606085013567ffffffffffffffff811115613b4f57613b4e61331b565b5b613b5b87828801613ab6565b91505092959194509250565b60008060408385031215613b7e57613b7d613316565b5b6000613b8c85828601613563565b9250506020613b9d858286016137f4565b9150509250929050565b60008060008060808587031215613bc157613bc0613316565b5b6000613bcf87828801613563565b9450506020613be087828801613563565b9350506040613bf1878288016134ae565b925050606085013567ffffffffffffffff811115613c1257613c1161331b565b5b613c1e87828801613ab6565b91505092959194509250565b60008060408385031215613c4157613c40613316565b5b6000613c4f85828601613563565b9250506020613c6085828601613563565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613cb157607f821691505b602082108103613cc457613cc3613c6a565b5b50919050565b7f5652433732353a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613d266021836133e6565b9150613d3182613cca565b604082019050919050565b60006020820190508181036000830152613d5581613d19565b9050919050565b7f5652433732353a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000613db8603d836133e6565b9150613dc382613d5c565b604082019050919050565b60006020820190508181036000830152613de781613dab565b9050919050565b7f5652433732353a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000613e246018836133e6565b9150613e2f82613dee565b602082019050919050565b60006020820190508181036000830152613e5381613e17565b9050919050565b7f5652433732353a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613eb6602d836133e6565b9150613ec182613e5a565b604082019050919050565b60006020820190508181036000830152613ee581613ea9565b9050919050565b7f565243373235456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b6000613f48602b836133e6565b9150613f5382613eec565b604082019050919050565b60006020820190508181036000830152613f7781613f3b565b9050919050565b7f5652433732353a2063616c6c6572206973206e6f7420746865206f776e657200600082015250565b6000613fb4601f836133e6565b9150613fbf82613f7e565b602082019050919050565b60006020820190508181036000830152613fe381613fa7565b9050919050565b7f565243373235456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000614046602c836133e6565b915061405182613fea565b604082019050919050565b6000602082019050818103600083015261407581614039565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261410d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826140d0565b61411786836140d0565b95508019841693508086168417925050509392505050565b6000819050919050565b600061415461414f61414a8461348d565b61412f565b61348d565b9050919050565b6000819050919050565b61416e83614139565b61418261417a8261415b565b8484546140dd565b825550505050565b600090565b61419761418a565b6141a2818484614165565b505050565b5b818110156141c6576141bb60008261418f565b6001810190506141a8565b5050565b601f82111561420b576141dc816140ab565b6141e5846140c0565b810160208510156141f4578190505b614208614200856140c0565b8301826141a7565b50505b505050565b600082821c905092915050565b600061422e60001984600802614210565b1980831691505092915050565b6000614247838361421d565b9150826002028217905092915050565b614260826133db565b67ffffffffffffffff8111156142795761427861366e565b5b6142838254613c99565b61428e8282856141ca565b600060209050601f8311600181146142c157600084156142af578287015190505b6142b9858261423b565b865550614321565b601f1984166142cf866140ab565b60005b828110156142f7578489015182556001820191506020850194506020810190506142d2565b868310156143145784890151614310601f89168261421d565b8355505b6001600288020188555050505b505050505050565b7f43616c6c6572206973206e6f74206d696e746572000000000000000000000000600082015250565b600061435f6014836133e6565b915061436a82614329565b602082019050919050565b6000602082019050818103600083015261438e81614352565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006143cf8261348d565b91506143da8361348d565b92508282019050808211156143f2576143f1614395565b5b92915050565b7f5652433732353a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006144546029836133e6565b915061445f826143f8565b604082019050919050565b6000602082019050818103600083015261448381614447565b9050919050565b7f5652433732353a205065726d697420646561646c696e65206578706972656400600082015250565b60006144c0601f836133e6565b91506144cb8261448a565b602082019050919050565b600060208201905081810360008301526144ef816144b3565b9050919050565b7f5652433732353a20496e76616c6964207065726d6974207369676e6174757265600082015250565b600061452c6020836133e6565b9150614537826144f6565b602082019050919050565b6000602082019050818103600083015261455b8161451f565b9050919050565b7f5652433732353a206f6e6c79206e6577206f776e65722063616e20616363657060008201527f74206f776e657273686970000000000000000000000000000000000000000000602082015250565b60006145be602b836133e6565b91506145c982614562565b604082019050919050565b600060208201905081810360008301526145ed816145b1565b9050919050565b60006145ff8261348d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361463157614630614395565b5b600182019050919050565b600081905092915050565b6000614652826133db565b61465c818561463c565b935061466c8185602086016133f7565b80840191505092915050565b60006146848285614647565b91506146908284614647565b91508190509392505050565b7f5652433732353a206e6577206f776e657220697320746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006146f86025836133e6565b91506147038261469c565b604082019050919050565b60006020820190508181036000830152614727816146eb565b9050919050565b7f5652433732353a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061478a6025836133e6565b91506147958261472e565b604082019050919050565b600060208201905081810360008301526147b98161477d565b9050919050565b7f5652433732353a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061481c6024836133e6565b9150614827826147c0565b604082019050919050565b6000602082019050818103600083015261484b8161480f565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61488781613510565b82525050565b6000614899838361487e565b60208301905092915050565b6000602082019050919050565b60006148bd82614852565b6148c7818561485d565b93506148d28361486e565b8060005b838110156149035781516148ea888261488d565b97506148f5836148a5565b9250506001810190506148d6565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614945816133a5565b82525050565b6000614957838361493c565b60208301905092915050565b6000602082019050919050565b600061497b82614910565b614985818561491b565b93506149908361492c565b8060005b838110156149c15781516149a8888261494b565b97506149b383614963565b925050600181019050614994565b5085935050505092915050565b600060408201905081810360008301526149e881856148b2565b905081810360208301526149fc8184614970565b90509392505050565b600060a082019050614a1a600083018861363f565b614a276020830187613522565b614a3460408301866135b8565b614a4160608301856135b8565b614a4e60808301846135b8565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f5652433732353a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614abd6019836133e6565b9150614ac882614a87565b602082019050919050565b60006020820190508181036000830152614aec81614ab0565b9050919050565b6000608082019050614b08600083018761363f565b614b156020830186613522565b614b2260408301856135b8565b614b2f60608301846135b8565b95945050505050565b7f5652433732353a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000614b946032836133e6565b9150614b9f82614b38565b604082019050919050565b60006020820190508181036000830152614bc381614b87565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614c048261348d565b9150614c0f8361348d565b925082614c1f57614c1e614bca565b5b828204905092915050565b6000614c358261348d565b9150614c408361348d565b9250828203905081811115614c5857614c57614395565b5b92915050565b6000614c698261348d565b9150614c748361348d565b925082614c8457614c83614bca565b5b828206905092915050565b7f565243373235456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000614ceb6035836133e6565b9150614cf682614c8f565b604082019050919050565b60006020820190508181036000830152614d1a81614cde565b9050919050565b600060a082019050614d36600083018861363f565b614d43602083018761363f565b614d50604083018661363f565b614d5d60608301856135b8565b614d6a6080830184613522565b9695505050505050565b600060ff82169050919050565b614d8a81614d74565b82525050565b6000608082019050614da5600083018761363f565b614db26020830186614d81565b614dbf604083018561363f565b614dcc606083018461363f565b95945050505050565b600081519050919050565b600082825260208201905092915050565b6000614dfc82614dd5565b614e068185614de0565b9350614e168185602086016133f7565b614e1f81613421565b840191505092915050565b6000604082019050614e3f600083018561363f565b8181036020830152614e518184614df1565b90509392505050565b600081905092915050565b6000614e7082614dd5565b614e7a8185614e5a565b9350614e8a8185602086016133f7565b80840191505092915050565b6000614ea28284614e65565b915081905092915050565b614eb681613635565b8114614ec157600080fd5b50565b600081519050614ed381614ead565b92915050565b600060208284031215614eef57614eee613316565b5b6000614efd84828501614ec4565b91505092915050565b6000608082019050614f1b6000830187613522565b614f286020830186613522565b614f3560408301856135b8565b8181036060830152614f478184614df1565b905095945050505050565b600081519050614f618161334c565b92915050565b600060208284031215614f7d57614f7c613316565b5b6000614f8b84828501614f52565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f5652433732353a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000614ff96020836133e6565b915061500482614fc3565b602082019050919050565b6000602082019050818103600083015261502881614fec565b9050919050565b7f5652433732353a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615065601c836133e6565b91506150708261502f565b602082019050919050565b6000602082019050818103600083015261509481615058565b905091905056fea26469706673582212204e3083fe85f6e93489c13a79d37a2e349a6323bbca00aabe51a3a34b5512f7dd64736f6c63430008110033"
