/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreateFeedItem = /* GraphQL */ `
  subscription OnCreateFeedItem(
    $filter: ModelSubscriptionFeedItemFilterInput
    $owner: String
  ) {
    onCreateFeedItem(filter: $filter, owner: $owner) {
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
export const onUpdateFeedItem = /* GraphQL */ `
  subscription OnUpdateFeedItem(
    $filter: ModelSubscriptionFeedItemFilterInput
    $owner: String
  ) {
    onUpdateFeedItem(filter: $filter, owner: $owner) {
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
export const onDeleteFeedItem = /* GraphQL */ `
  subscription OnDeleteFeedItem(
    $filter: ModelSubscriptionFeedItemFilterInput
    $owner: String
  ) {
    onDeleteFeedItem(filter: $filter, owner: $owner) {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $owner: String
  ) {
    onCreateFollow(filter: $filter, owner: $owner) {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $owner: String
  ) {
    onUpdateFollow(filter: $filter, owner: $owner) {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $owner: String
  ) {
    onDeleteFollow(filter: $filter, owner: $owner) {
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
