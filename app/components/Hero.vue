<template>
  <div class="grid items-center gap-12 lg:grid-cols-2">
    <div class="mx-auto max-w-2xl text-left lg:mx-0">
      <div class="mb-4">
        <UBadge class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none">
          <Icon name="lucide:star" class="w-4 h-4 mr-1" />
          Visual Theme Editor
        </UBadge>
      </div>

      <h1 class="from-primary via-primary/90 to-primary/70 mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
        Design Your
        <span class="font-serif font-light italic">Perfect</span>
        <span class="text-primary inline-flex items-baseline gap-1">
          <div class="bg-primary/10 flex items-center justify-center rounded-full p-1 md:p-2">
            <Icon name="simple-icons:nuxt" />
          </div>
          <span>Nuxt UI</span>
        </span>
        Theme
      </h1>

      <p class="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
        Customize colors, typography, and layouts with a real-time preview. No signup
        required.
      </p>

      <div class="flex flex-col gap-4 sm:flex-row">
        <UButton
          size="lg"
          to="/editor/theme"
          class="h-12 cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Start Customizing
          <Icon name="lucide:arrow-right" class="ml-2 w-4 h-4" />
        </UButton>
        <UButton
          size="lg"
          to="#examples"
          variant="outline"
          class="border-primary/20 hover:border-primary/50 h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:-translate-y-0.5"
        >
          View Examples
        </UButton>
      </div>

      <div class="mt-8 flex flex-wrap items-center gap-6">
        <div class="text-muted-foreground flex items-center gap-2 text-sm">
          <Icon name="lucide:check" class="text-primary w-5 h-5" />
          <span>Real-time Preview</span>
        </div>
        <div class="text-muted-foreground flex items-center gap-2 text-sm">
          <Icon name="lucide:check" class="text-primary w-5 h-5" />
          <span>Export to Tailwind</span>
        </div>
        <div class="text-muted-foreground flex items-center gap-2 text-sm">
          <Icon name="lucide:check" class="text-primary w-5 h-5" />
          <span>Beautiful Presets</span>
        </div>
      </div>
    </div>
    <div class="relative hidden lg:block">
      <UCard class="border-border/40 from-background to-background/95 relative overflow-hidden rounded-2xl bg-gradient-to-b shadow-xl backdrop-blur">
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div class="w-3 h-3 rounded-full bg-yellow-500" />
                <div class="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        </template>

        <div class="space-y-4 mb-6">
          <div class="flex items-center justify-between">
            <div class="text-sm font-medium">
              Color Palette
            </div>
            <Icon name="lucide:palette" class="text-muted-foreground w-4 h-4" />
          </div>
          <div class="space-y-2 text-center">
            <div class="from-primary via-secondary via-accent via-muted to-background h-24 w-full rounded-xl bg-gradient-to-r" />
            <div class="text-muted-foreground grid grid-cols-5 gap-2 text-xs">
              <div>Primary</div>
              <div>Secondary</div>
              <div>Accent</div>
              <div>Muted</div>
              <div>Background</div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="text-sm font-medium">
              Preview
            </div>
            <Icon name="lucide:eye" class="text-muted-foreground w-4 h-4" />
          </div>
          <div class="space-y-3">
            <div class="flex gap-2">
              <UButton icon="lucide:copy" class="w-full shadow-sm ">
                Copy Code
              </UButton>
              <UButton icon="lucide:eye" class="w-full shadow-sm transition-none" variant="outline">
                oklch, hsl, rgb, hex
              </UButton>
            </div>

            <UCard class="w-full">
              <div class="flex items-center gap-3">
                <div
                  class="bg-primary/10 flex w-8 h-8 items-center justify-center rounded-full"
                >
                  <span class="text-primary text-xs">UI</span>
                </div>
                <div class="flex-1">
                  <div class="bg-primary mb-2 h-2 w-24 rounded" />
                  <div class="bg-primary/60 h-2 w-16 rounded" />
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
