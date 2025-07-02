<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Examples',
    to: '#examples',
  },
  {
    label: 'Features',
    to: '#features',
  },
  {
    label: 'How it works',
    to: '#how-it-works',
  },
  {
    label: 'Roadmap',
    to: '#roadmap',
  },
  {
    label: 'FAQ',
    to: '#faq',
  },
])

const { stargazersCount, isLoading } = useGithubStars('zangetsu02', 'tweaknui')
</script>

<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-lg bg-transparent">
    <div class="container mx-auto flex h-16 px-4 md:px-6 items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold">
        tweaknui
      </NuxtLink>
      <nav class="hidden md:flex gap-4 lg:gap-8 items-center">
        <UNavigationMenu :items="items" class="w-full justify-center" />
      </nav>
      <div class="hidden md:flex gap-4 items-center cursor-pointer">
        <UButton :loading="isLoading" to="https://github.com/zangetsu02/tweaknui" icon="simple-icons:github">
          {{ stargazersCount ?? '' }}
        </UButton>
        <AppThemeSelector />
        <UButton to="https://github.com/zangetsu02/tweaknui" trailing-icon="lucide:arrow-right">
          Try it now
        </UButton>
      </div>
      <div class="flex items-center gap-4 md:hidden" />
    </div>
  </header>
</template>
