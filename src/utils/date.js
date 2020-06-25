import { format, parseISO } from "date-fns"

const formatDate = date => format(parseISO(date), "MMM yyyy")

export const formatDatesToDisplay = (
  startDate,
  endDate,
  isCurrentRole = false
) => {
  try {
    const secondDate = isCurrentRole ? "now" : formatDate(endDate)

    return `${formatDate(startDate)} to ${secondDate}`
  } catch {
    return ""
  }
}
