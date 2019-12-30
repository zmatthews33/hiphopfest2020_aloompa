/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApp = `query GetApp($id: ID!) {
  getApp(id: $id) {
    id
    name
    _id
  }
}
`;
export const listApps = `query ListApps($filter: ModelAppFilterInput, $limit: Int, $nextToken: String) {
  listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      _id
    }
    nextToken
  }
}
`;
export const getStage = `query GetStage($id: ID!) {
  getStage(id: $id) {
    id
    name
    _id
  }
}
`;
export const listStages = `query ListStages(
  $filter: ModelStageFilterInput
  $limit: Int
  $nextToken: String
) {
  listStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      _id
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    appId
    stageId
    name
    description
    image
    startsAt
    endsAt
    _id
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      appId
      stageId
      name
      description
      image
      startsAt
      endsAt
      _id
    }
    nextToken
  }
}
`;
