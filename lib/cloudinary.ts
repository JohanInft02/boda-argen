import content from "@/data/content.json"

const UPLOAD_MARKER = "/image/upload/"

const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
  (content as { cloudinary?: { cloudName?: string } }).cloudinary?.cloudName ||
  ""

const DEFAULT_TRANSFORMS = "f_auto,q_auto"

type CloudinaryOptions = {
  width?: number
  transforms?: string
}

export function cloudinaryUrl(src?: string | null, options: CloudinaryOptions = {}): string {
  if (!src) return "/placeholder.svg"

  const trimmed = src.trim()
  if (trimmed.startsWith("/") || trimmed.startsWith("data:")) return trimmed

  const transformation = [options.transforms ?? DEFAULT_TRANSFORMS, options.width ? `w_${options.width}` : null]
    .filter(Boolean)
    .join(",")

  const isAbsolute = /^https?:\/\//i.test(trimmed)
  const looksLikeHost = /^[\w.-]+\.[a-z]{2,}\//i.test(trimmed)

  if (isAbsolute || looksLikeHost) {
    const absolute = isAbsolute ? trimmed : `https://${trimmed}`
    const markerIndex = absolute.indexOf(UPLOAD_MARKER)
    if (markerIndex === -1) return absolute

    const prefix = absolute.slice(0, markerIndex + UPLOAD_MARKER.length)
    const rest = absolute.slice(markerIndex + UPLOAD_MARKER.length)
    if (rest.startsWith(`${transformation}/`)) return absolute

    return `${prefix}${transformation}/${rest}`
  }

  if (!CLOUD_NAME) return "/placeholder.svg"

  return `https://res.cloudinary.com/${CLOUD_NAME}${UPLOAD_MARKER}${transformation}/${trimmed.replace(/^\/+/, "")}`
}
