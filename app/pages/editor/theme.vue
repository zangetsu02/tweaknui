<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'

definePageMeta({
  layout: 'editor',
})

const route = useRoute()
const router = useRouter()
const layout = useCookie<number[]>('splitter:layout')

const items = ref<TabsItem[]>([
  {
    label: 'Colors',
    value: 'colors',
    slot: 'colors' as const,
  },
  {
    label: 'Typography',
    value: 'typography',
    slot: 'typography' as const,
  },
  {
    label: 'Other',
    value: 'other',
    slot: 'other' as const,
  },
])

const active = computed({
  get() {
    return (route.query.tab as string) || 'colors'
  },
  set(tab) {
    router.push({
      path: '/editor/theme',
      query: { tab },
    })
  },
})
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

        <UTabs v-model="active" :items="items" class="w-full">
          <template #colors>
            <div class="relative flex w-full flex-col items-center justify-start gap-2 mt-2 mb-1 px-4">
              <EditorColors />
            </div>
          </template>
          <template #typography>
            <div class="relative flex w-full flex-col items-center justify-start gap-2 mt-2 mb-1 px-4">
              <EditorTypography />
            </div>
          </template>
          <template #other>
            <div class="relative flex w-full flex-col items-center justify-start gap-2 mt-2 mb-1 px-4">
              <EditorOther />
            </div>
          </template>
        </UTabs>
      </div>
    </SplitterPanel>
    <SplitterResizeHandle class="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1" />
    <SplitterPanel>
      <div class="">
        <div class="3xl:grids-col-2 grid p-2 **:data-[slot=card]:shadow-none md:p-4 3xl:gap-4 5xl:grid-cols-10 7xl:grid-cols-11">
          <div class="grid gap-4 xl:grid-cols-2 5xl:grid-cols-1 7xl:grid-cols-2">
            <ExampleButton />

            <ExampleCards />
          </div>
        </div>
      </div>
    </SplitterPanel>
  </SplitterGroup>
</template>
