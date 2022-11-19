/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const updateFeedItem = /* GraphQL */ `
  mutation UpdateFeedItem(
    $input: UpdateFeedItemInput!
    $condition: ModelFeedItemConditionInput
  ) {
    updateFeedItem(input: $input, condition: $condition) {
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
export const deleteFeedItem = /* GraphQL */ `
  mutation DeleteFeedItem(
    $input: DeleteFeedItemInput!
    $condition: ModelFeedItemConditionInput
  ) {
    deleteFeedItem(input: $input, condition: $condition) {
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
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const createFeedItem = /* GraphQL */ `
  mutation CreateFeedItem(
    $input: CreateFeedItemInput!
    $condition: ModelFeedItemConditionInput
  ) {
    createFeedItem(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
