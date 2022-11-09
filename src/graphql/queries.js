/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($userID: ID!) {
    getUser(userID: $userID) {
      userID
      posts {
        nextToken
      }
      feedItems {
        nextToken
      }
      following {
        nextToken
      }
      followers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userID: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      userID
      user {
        userID
        createdAt
        updatedAt
      }
      color
      feedItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        color
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeedItem = /* GraphQL */ `
  query GetFeedItem($id: ID!) {
    getFeedItem(id: $id) {
      id
      userID
      user {
        userID
        createdAt
        updatedAt
      }
      post {
        id
        userID
        color
        createdAt
        updatedAt
      }
      liked
      createdAt
      updatedAt
      postFeedItemsId
    }
  }
`;
export const listFeedItems = /* GraphQL */ `
  query ListFeedItems(
    $filter: ModelFeedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        liked
        createdAt
        updatedAt
        postFeedItemsId
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      followerID
      follower {
        userID
        createdAt
        updatedAt
      }
      followedID
      followed {
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerID
        followedID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
