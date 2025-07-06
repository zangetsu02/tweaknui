<script setup lang="ts">
defineProps({
  label: String,
})
</script>

<template>
  <UCollapsible class="flex flex-col  w-full border">
    <UButton
      class="rounded-none "
      :label="label"
      variant="ghost"
      trailing-icon="i-lucide-chevron-down"
      :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
      }"
      block
    />

    <template #content>
      <div class="bg-background border-t p-3 flex flex-col gap-3">
        <slot />
      </div>
    </template>
  </UCollapsible>
</template>
