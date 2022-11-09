/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createFeedItem = /* GraphQL */ `
  mutation CreateFeedItem(
    $input: CreateFeedItemInput!
    $condition: ModelFeedItemConditionInput
  ) {
    createFeedItem(input: $input, condition: $condition) {
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
export const updateFeedItem = /* GraphQL */ `
  mutation UpdateFeedItem(
    $input: UpdateFeedItemInput!
    $condition: ModelFeedItemConditionInput
  ) {
    updateFeedItem(input: $input, condition: $condition) {
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
export const deleteFeedItem = /* GraphQL */ `
  mutation DeleteFeedItem(
    $input: DeleteFeedItemInput!
    $condition: ModelFeedItemConditionInput
  ) {
    deleteFeedItem(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
