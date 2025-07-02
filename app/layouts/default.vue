<template>
  <UApp :tooltip="{ delayDuration: 0 }" class="relative">
    <div class="bg-background text-foreground flex min-h-[100dvh] flex-col items-center justify-items-center">
      <AppHeader />
      <main class="w-full flex-1">
        <slot />
      </main>
    </div>
  </UApp>
</template>
