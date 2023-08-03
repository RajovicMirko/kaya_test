export const INPUT_PLACEHOLDER = "Type something to explore with Carter Lumber";
export const TITLE = "How can I help?";
export const SUBTITLE = "Your AI Prodesk for construction";

export enum ChatCoordinates {
  maxWidth = "maxWidth",
  inputWrapperMarginTop = "inputWrapperMarginTop",
  inputWrapperMarginBottom = "inputWrapperMarginBottom",
}

const CHAT_COORDINATES: { [key in ChatCoordinates]: number } = {
  [ChatCoordinates.maxWidth]: 800,
  [ChatCoordinates.inputWrapperMarginTop]: 20,
  [ChatCoordinates.inputWrapperMarginBottom]: 10,
};

type GetChatCoordinates = {
  toPx(): string;
};

export const getChatCoordinates = (
  key: ChatCoordinates
): number & GetChatCoordinates => {
  const value = CHAT_COORDINATES[key];

  const toPx = (): string => value + "px";

  return Object.assign(value, { toPx });
};
