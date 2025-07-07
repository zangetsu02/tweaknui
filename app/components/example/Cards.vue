<script setup lang="ts">
import type { CheckboxGroupItem, RadioGroupItem } from '@nuxt/ui'

const items = ref<RadioGroupItem[]>([
  {
    label: 'Starter Plan',
    value: 'starter',
    description: 'Perfect for small businesses.',
  },
  {
    label: 'Pro Plan',
    value: 'pro',
    description: 'More features and storage.',
  },
])

const checkboxItems = ref<CheckboxGroupItem[]>(['I agree to the terms and conditions', 'Allow us to send you emails'])
</script>

<template>

      <UCard>
        <template #header>
          <div class="flex flex-col gap-1.5">
            <div class="font-semibold tracking-tight text-lg">
              Upgrade your subscription
            </div>
            <div class="text-sm text-muted-foreground">
              You are currently on the free plan. Upgrade to the pro plan to get access to all features.
            </div>
          </div>
        </template>

        <!-- User info section -->
        <div class="flex flex-col gap-3 xl:flex-row xl:gap-5 mb-6">
          <UFormField label="Name" class="flex-1">
            <UInput class="w-full" />
          </UFormField>
          <UFormField label="Email" class="flex-1">
            <UInput class="w-full" />
          </UFormField>
        </div>

        <!-- Payment info section -->
        <div class="flex flex-col gap-3 mb-6">
          <UFormField label="Card Number">
            <UInput class="w-full" placeholder="1234 1234 1234 1234" />
          </UFormField>
          <div class="flex flex-col gap-3 xl:flex-row xl:gap-5">
            <UFormField label="Expiry" class="flex-1">
              <UInput class="w-full" placeholder="MM/YY" />
            </UFormField>
            <UFormField label="CVC" class="flex-1">
              <UInput class="w-full" placeholder="CVC" />
            </UFormField>
          </div>
        </div>

        <!-- Plan section -->
        <div class="mb-2">
          <div class="text-sm font-medium">
            Plan
          </div>
          <p class="text-muted-foreground text-sm mb-3">
            Select the plan that best fits your needs.
          </p>
          <URadioGroup
            color="primary"
            variant="table"
            default-value="pro"
            :items="items"
            class="mb-3"
          />
        </div>

        <!-- Note section -->
        <div class="mb-4">
          <UFormField label="Note">
            <UTextarea
              :ui="{
                root: 'w-full',
              }"
            />
          </UFormField>
        </div>

        <!-- Checkbox section -->
        <div class="mb-6">
          <UCheckboxGroup
            color="primary"
            :default-value="['Allow us to send you emails']"
            :items="checkboxItems"
          />
        </div>

        <template #footer>
          <div class="flex items-center justify-between gap-2 pt-4 border-t border-border">
            <UButton label="Cancel" color="secondary" />
            <UButton label="Upgrade Plan" />
          </div>
        </template>
      </UCard>

      <UCard>
        <UFormField label="Email" name="email">
          <UInput />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput type="password" />
        </UFormField>

        <UButton type="submit">
          Submit
        </UButton>
      </UCard>

      <UCard>
        <UFormField label="Email" name="email">
          <UInput />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput type="password" />
        </UFormField>

        <UButton type="submit">
          Submit
        </UButton>
      </UCard>

</template>
