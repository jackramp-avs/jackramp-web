# JackRamp

JackRamp is a decentralized USD off-ramp solution powered by ZkVM technology, enabling seamless conversion between crypto and USD. The platform features JackUSD and M0 tokens, with M0 serving as the mining token for JackUSD.

## 📧 Docs

Project Documentation : [https://kbaji.gitbook.io/jackramp-avs](https://kbaji.gitbook.io/jackramp-avs)

## 🌟 Features

### Core Functionality
- **Mint**: Create new JackUSD tokens through the platform
- **Withdraw**: Convert JackUSD back to other assets
- **Swap**: Exchange between different supported tokens
- **Proof**: List of transactions proof
- **Liquidity**: Provide and manage liquidity pools

### Technical Integration
- Wallet connection using wagmi
- Smart contract interaction (read/write) via wagmi hooks
- Subgraph integration for transaction data querying
- Real-time data updates through GraphQL

## 🚀 Tech Stack

- React + Vite
- TypeScript
- Wagmi for Web3 integration
- GraphQL for data querying
- TheGraph for indexing blockchain data

## 🔧 Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- MetaMask or other Web3 wallet

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/jackramp-avs/jackramp-web.git
cd jackramp-web
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
yarn dev
# or
npm run dev
```

## 🔗 Smart Contract Integration

### Reading Contract Data
```typescript
import { useReadContract } from 'wagmi'
```

### Writing to Contract
```typescript
import { useWriteContract } from 'wagmi'
```

## 📊 Subgraph Integration

### Query Example
```graphql
{
    operators {
        id
        address
        lastActiveTimestamp
        tasksResponded(orderBy: respondedAt, orderDirection: desc) {
            receiver
            requestOfframpId
            respondedAt
            status
            taskCreatedBlock
            taskIndex
            transactionHash
            transactionId
            createdAt
            channelId
        }
    }
}
```

## 🪙 Tokenomics

### JackUSD
- Decentralized USD-pegged stablecoin
- Backed by crypto collateral
- Maintains 1:1 USD peg

### M0 Token
- Mining token for JackUSD
- Used for governance and rewards
- Earned through platform participation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.