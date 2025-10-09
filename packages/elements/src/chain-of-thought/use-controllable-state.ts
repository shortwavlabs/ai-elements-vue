import { ref, computed, watch, isRef, type Ref } from 'vue'

interface UseControllableStateOptions<T> {
  modelValue?: Ref<T | undefined> | T
  defaultValue?: T
  onUpdate?: (val: T) => void
}

/**
 * A composable to support controlled / uncontrolled state
 * following Vue’s `modelValue` + `update:modelValue` convention.
 */
export function useControllableState<T>(
  options: UseControllableStateOptions<T>,
) {
  const { modelValue, defaultValue, onUpdate } = options

  const model = computed<T | undefined>(() =>
    isRef(modelValue) ? modelValue.value : (modelValue as T | undefined),
  )

  const internal = ref<T | undefined>(defaultValue)
  const isControlled = computed(() => model.value !== undefined)

  // If modelValue changes (in controlled mode), sync internal if needed
  watch(
    model,
    (val) => {
      if (isControlled.value) {
        internal.value = val
      }
    },
    { immediate: true },
  )

  const state = computed<T>({
    get() {
      return isControlled.value ? (model.value as T) : (internal.value as T)
    },
    set(val: T) {
      if (isControlled.value) {
        onUpdate && onUpdate(val)
      } else {
        internal.value = val
        onUpdate && onUpdate(val)
      }
    },
  })

  return state
}
