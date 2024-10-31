import { gql } from "graphql-request";

export const queryMint = gql`{
    mints(orderDirection: desc, orderBy: blockTimestamp) {
        amount
        blockNumber
        blockTimestamp
        transactionHash
        user
        id
    }
}`

export const queryWithdraw = gql`{
    withdraws(orderBy: blockTimestamp, orderDirection: desc) {
        id
        blockTimestamp
        blockNumber
        amount
        transactionHash
        user
    }
}`

export const querySwap = gql`{
    offRamps(orderBy: blockTimestamp, orderDirection: desc) {
        id
        user
        requestedAmount
        requestedAmountRealWorld
        blockNumber
        blockTimestamp
        channelAccount
        channelId
        transactionHash
    }
}`

export const queryOperator = gql`{
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
}`