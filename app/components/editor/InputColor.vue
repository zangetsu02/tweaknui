<script setup lang="ts">
import { formatHex, oklch } from 'culori'

const {
  cssProperty = '--ui-primary',
} = defineProps<{
  label: string
  cssProperty?: string
}>()

const color = ref('#000000')
const items = ref([])

function generateColorItems() {
  items.value = Object.entries(TAILWIND_PALETTE).flatMap(([colorName, shades]) => [
    { label: colorName.charAt(0).toUpperCase() + colorName.slice(1), type: 'label' },
    ...TAILWIND_SHADES
      .filter(shade => shades[shade])
      .map(shade => ({
        label: `${colorName}-${shade}`,
        value: shades[shade],
        color: shades[shade],
        type: 'item',
      })),
  ])
}

onMounted(() => {
  const cssVar = getComputedStyle(document.documentElement)
    .getPropertyValue(cssProperty)
    .trim()

  if (cssVar) {
    color.value = cssVar
  }
  generateColorItems()
})

function oklchToHex(oklchString: string) {
  const match = oklchString.match(/oklch\(([^)]+)\)/)
  if (!match)
    return oklchString
  const [l, c, h] = match[1].split(' ').map(Number)
  const color = oklch({ l, c, h })
  return formatHex(color)
}

function onSelect(colorValue: string) {
  color.value = oklchToHex(colorValue.value)
}

watch(color, () => {
  document.documentElement.style.setProperty(cssProperty, color.value)
})
</script>

<template>
  <UFormField :label>
    <div class="relative flex items-center gap-1">
      <div
        class="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded border"
        :style="{ backgroundColor: color }"
      >
        <input
          v-model="color"
          type="color"
          class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        >
      </div>
      <UInput
        v-model="color"
        type="text"
        class="flex-1"
      />
      <USelectMenu
        as="button"
        icon="simple-icons:tailwindcss"
        :items="items"
        option-attribute="label"
        value-attribute="value"
        searchable
        :ui="{
          base: ['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/10 px-[12px] text-xs group bg-input/25 size-8 rounded border shadow-none'],
          content: ['w-[300px]'],
        }
        "
        @update:model-value="onSelect"
      >
        <template #default>
          <Icon name="simple-icons:tailwindcss" />
        </template>

        <template #item="{ item }">
          <div v-if="item.type === 'item'" class="flex items-center gap-2">
            <span
              class="inline-block h-5 w-5 rounded border"
              :style="{ background: item.color }"
            />
            <span>{{ item.label }}</span>
          </div>
          <span
            v-else-if="item.type === 'label'"
            class="block text-xs px-2 py-1 font-bold opacity-70"
          >
            {{ item.label }}
          </span>
        </template>
      </USelectMenu>
    </div>
  </UFormField>
</template>
