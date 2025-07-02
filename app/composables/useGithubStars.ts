// useGithubStars.ts
import type { Ref } from 'vue'
import { computed, unref } from 'vue'

interface GitHubStarsResponse {
  stargazers_count: number
}

/**
 * Composable for fetching the number of stars of a GitHub repository
 * @param owner string | Ref<string>
 * @param repo  string | Ref<string>
 */
export function useGithubStars(
  owner: string | Ref<string>,
  repo: string | Ref<string>,
) {
  const url = computed<string>(() => {
    const _owner = unref(owner)
    const _repo = unref(repo)
    return `https://api.github.com/repos/${_owner}/${_repo}`
  })

  const { data, pending, error } = useFetch<GitHubStarsResponse>(
    url.value,
    {
      server: false,
      onRequest({ options }) {
        options.cache = 'no-store'
      },
      retry: 1,
    },
  )

  const stargazersCount = computed(() => data.value?.stargazers_count ?? 0)
  const isLoading = computed(() => pending.value)
  const fetchError = computed(() => error.value as Error | null)

  return { stargazersCount, isLoading, error: fetchError }
}
