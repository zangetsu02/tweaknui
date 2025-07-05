<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')
</script>

<template>
  <div class="border-b">
    <div class="flex w-full items-center">
      <USelectMenu v-model="value" variant="ghost" :items="items" class="flex-grow md:min-w-56 h-14 rounded-none" />
      <div class="shrink-0 bg-border w-[1px] h-8" />
      <UButton variant="ghost" icon="lucide:arrow-left" class="shrink-0 justify-center aspect-square min-h-8 w-auto h-14 rounded-none" />
      <div class="shrink-0 bg-border w-[1px] h-8" />
      <UButton variant="ghost" icon="lucide:arrow-right" class="shrink-0 justify-center aspect-square min-h-8 w-auto h-14 rounded-none" />
    </div>
  </div>
</template>
