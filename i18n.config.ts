import { dateTimeFormats } from "./i18n/datetime-formats"
import { numberFormats } from "./i18n/number-formats"

export default defineI18nConfig(() => ({
  fallbackLocale: ["en-US", "pt-BR"],
  legacy: false,
  dateTimeFormats,
  numberFormats,
}))