<script setup lang="ts">
const colorVariants = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
const buttonVariants = ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link']

const color = ref<string>(colorVariants[0])
const variant = ref<string>(buttonVariants[0])
</script>

<template>
  <UCard
    :ui="{ header: 'flex flex-wrap items-center gap-2.5 relative rounded-t-md px-4 py-2.5 overflow-x-auto' }"
  >
    <template #header>
      <UFormField
        label="color"
        size="sm"
        class="inline-flex ring ring-accented rounded-sm"
        :ui="{
          wrapper: 'bg-elevated/50 rounded-l-sm flex border-r border-accented',
          label: 'text-muted px-2 py-1.5',
          container: 'mt-0',
        }"
      >
        <USelect
          v-model="color"
          :items="colorVariants"
          color="neutral"
          variant="soft"
          class="rounded-sm rounded-l-none min-w-12"
          :ui="{ itemLeadingChip: 'size-2' }"
        >
          <template #leading="{ modelValue, ui }">
            <UChip
              v-if="modelValue"
              inset
              standalone
              :color="(modelValue as any)"
              :size="(ui.itemLeadingChipSize())"
              class="size-2"
            />
          </template>
        </USelect>
      </UFormField>

      <UFormField
        label="variant"
        size="sm"
        class="inline-flex ring ring-accented rounded-sm"
        :ui="{
          wrapper: 'bg-elevated/50 rounded-l-sm flex border-r border-accented',
          label: 'text-muted px-2 py-1.5',
          container: 'mt-0',
        }"
      >
        <USelect
          v-model="variant"
          :items="buttonVariants"
          color="neutral"
          variant="soft"
          class="rounded-sm rounded-l-none min-w-12"
          :ui="{ itemLeadingChip: 'size-2' }"
        >
          <template #leading="{ modelValue, ui }">
            <UChip
              v-if="modelValue"
              inset
              standalone
              :color="(modelValue as any)"
              :size="(ui.itemLeadingChipSize())"
              class="size-2"
            />
          </template>
        </USelect>
      </UFormField>
    </template>

    <template #default>
      <UButton :color :variant label="Button" />
    </template>
  </UCard>
</template>
