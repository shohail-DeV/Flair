import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skUciNapwhD5h3yXXgcNy5jZ7LOf64C7jPoLExBCgcz3ljTywmUmz7v4T6HmGRvEH65edl1Q8YAghC3NwAlvEWc1UnDvKpWxbSVld0H9hVI4FjTbfHyzyTYYz8dZJ5QtRqTgmRwZ2yIFtY5asuqI47nQYJGG9fKm3cXVZtftwc90k8O2T6SG"
})
