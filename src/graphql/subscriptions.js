/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateFeedItem = /* GraphQL */ `
  subscription OnCreateFeedItem($filter: ModelSubscriptionFeedItemFilterInput) {
    onCreateFeedItem(filter: $filter) {
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
export const onUpdateFeedItem = /* GraphQL */ `
  subscription OnUpdateFeedItem($filter: ModelSubscriptionFeedItemFilterInput) {
    onUpdateFeedItem(filter: $filter) {
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
export const onDeleteFeedItem = /* GraphQL */ `
  subscription OnDeleteFeedItem($filter: ModelSubscriptionFeedItemFilterInput) {
    onDeleteFeedItem(filter: $filter) {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow($filter: ModelSubscriptionFollowFilterInput) {
    onCreateFollow(filter: $filter) {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow($filter: ModelSubscriptionFollowFilterInput) {
    onUpdateFollow(filter: $filter) {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow($filter: ModelSubscriptionFollowFilterInput) {
    onDeleteFollow(filter: $filter) {
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
