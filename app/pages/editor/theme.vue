<script setup lang="ts">
import type { AccordionItem, TabsItem } from '@nuxt/ui'

import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'

definePageMeta({
  layout: 'editor',
})

const layout = useCookie<number[]>('splitter:layout')

const items = ref<TabsItem[]>([
  {
    label: 'Colors',
  },
  {
    label: 'Typography',
  },
  {
    label: 'Other',
  },
])

const accordionItems = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
])
</script>

<template>
  <SplitterGroup
    class="flex h-full w-full data-[data-orientation=vertical]:flex-col isolate"
    direction="horizontal"
    @layout="layout = $event"
  >
    <SplitterPanel
      class="z-1 min-w-[max(20%,22rem)]"
      :min-size="20"
      :max-size="40"
    >
      <div class="relative isolate flex h-full flex-1 flex-col">
        <EditorThemeSwitcher />
        <div class="relative flex w-full flex-col items-center justify-start gap-2 mt-2 mb-1 px-4">
          <UTabs :items="items" class="w-full" />

          <UCollapsible class="flex flex-col  w-full border">
            <UButton
              class="rounded-none "
              label="Primary Colors"
              variant="ghost"
              trailing-icon="i-lucide-chevron-down"
              :ui="{
                trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
              }"
              block
            />

            <template #content>
              <div class="bg-background border-t p-3">
                <UFormField label="Primary">
                  <div class="relative flex items-center gap-1">
                    <div class="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded border">
                      <input type="color" class="absolute inset-0 h-full w-full cursor-pointer opacity-0">
                    </div>
                    <UInput type="text" class="flex-1" />
                    <UButton icon="lucide:plus" />
                  </div>
                </UFormField>
              </div>
            </template>
          </UCollapsible>

          <UCollapsible class="flex flex-col  w-full border">
            <UButton
              class="rounded-none "
              label="Secondary Colors"
              variant="ghost"
              trailing-icon="i-lucide-chevron-down"
              :ui="{
                trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
              }"
              block
            />

            <template #content>
              <div class="bg-background border-t p-3">
                <UFormField label="Primary">
                  <div class="relative flex items-center gap-1">
                    <div class="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded border">
                      <input type="color" class="absolute inset-0 h-full w-full cursor-pointer opacity-0">
                    </div>
                    <UInput type="text" class="flex-1" />
                    <UButton icon="lucide:plus" />
                  </div>
                </UFormField>
              </div>
            </template>
          </UCollapsible>
        </div>
      </div>
    </SplitterPanel>
    <SplitterResizeHandle class="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1" />
    <SplitterPanel>
      <div class="border">
        bbb
      </div>
    </SplitterPanel>
  </SplitterGroup>
</template>
