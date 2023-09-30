//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters

export const dateTimeFormats = {
  "pt-BR": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  },
  "en-US": {
    short: {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  },
} as const