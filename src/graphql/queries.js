/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      owner
      posts {
        items {
          id
          owner
          color
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      feedItems {
        items {
          id
          owner
          liked
          createdAt
          updatedAt
          userFeedItemsId
          postFeedItemsId
        }
        nextToken
      }
      following {
        items {
          id
          owner
          followerID
          followedID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          owner
          followerID
          followedID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      owner
      user {
        id
        owner
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
      color
      feedItems {
        items {
          id
          owner
          liked
          createdAt
          updatedAt
          userFeedItemsId
          postFeedItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
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
        owner
        user {
          id
          owner
          createdAt
          updatedAt
        }
        color
        feedItems {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      nextToken
    }
  }
`;
export const getFeedItem = /* GraphQL */ `
  query GetFeedItem($id: ID!) {
    getFeedItem(id: $id) {
      id
      owner
      user {
        id
        owner
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
      post {
        id
        owner
        user {
          id
          owner
          createdAt
          updatedAt
        }
        color
        feedItems {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      liked
      createdAt
      updatedAt
      userFeedItemsId
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
        owner
        user {
          id
          owner
          createdAt
          updatedAt
        }
        post {
          id
          owner
          color
          createdAt
          updatedAt
          userPostsId
        }
        liked
        createdAt
        updatedAt
        userFeedItemsId
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
      owner
      followerID
      follower {
        id
        owner
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
      followedID
      followed {
        id
        owner
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
        owner
        followerID
        follower {
          id
          owner
          createdAt
          updatedAt
        }
        followedID
        followed {
          id
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
