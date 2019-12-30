/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApp = `mutation CreateApp(
  $input: CreateAppInput!
  $condition: ModelAppConditionInput
) {
  createApp(input: $input, condition: $condition) {
    id
    name
    _id
  }
}
`;
export const updateApp = `mutation UpdateApp(
  $input: UpdateAppInput!
  $condition: ModelAppConditionInput
) {
  updateApp(input: $input, condition: $condition) {
    id
    name
    _id
  }
}
`;
export const deleteApp = `mutation DeleteApp(
  $input: DeleteAppInput!
  $condition: ModelAppConditionInput
) {
  deleteApp(input: $input, condition: $condition) {
    id
    name
    _id
  }
}
`;
export const createStage = `mutation CreateStage(
  $input: CreateStageInput!
  $condition: ModelStageConditionInput
) {
  createStage(input: $input, condition: $condition) {
    id
    name
    _id
  }
}
`;
export const updateStage = `mutation UpdateStage(
  $input: UpdateStageInput!
  $condition: ModelStageConditionInput
) {
  updateStage(input: $input, condition: $condition) {
    id
    name
    _id
  }
}
`;
export const deleteStage = `mutation DeleteStage(
  $input: DeleteStageInput!
  $condition: ModelStageConditionInput
) {
  deleteStage(input: $input, condition: $condition) {
    id
    name
    _id
  }
}
`;
export const createEvent = `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
export const updateEvent = `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
