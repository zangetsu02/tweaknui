<script setup lang="ts">
const { stargazersCount, isLoading } = useGithubStars('zangetsu02', 'tweaknui')
</script>

<template>
  <header class="border-b">
    <div class="p-4 flex items-center gap-2 justify-between">
      <div class="flex items-center gap-1">
        <NuxtLink to="/" class="text-xl font-bold">
          tweaknui
        </NuxtLink>
      </div>
      <div class="flex items-center gap-3.5">
        <UButton :loading="isLoading" to="https://github.com/zangetsu02/tweaknui" icon="simple-icons:github">
          {{ stargazersCount ?? '' }}
        </UButton>

        <div class="shrink-0 bg-border w-[1px] h-8" />

        <div class="flex items-center gap-3.5">
          <UButton :loading="isLoading" to="https://github.com/zangetsu02/tweaknui" icon="simple-icons:github">
            {{ stargazersCount ?? '' }}
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>
