<template>
  <UApp :tooltip="{ delayDuration: 0 }" class="relative">
    <div class="relative isolate flex h-svh flex-col overflow-hidden">
      <EditorHeader />

      <main class="isolate flex flex-1 flex-col overflow-hidden">
        <slot />
      </main>
    </div>
  </UApp>
</template>
