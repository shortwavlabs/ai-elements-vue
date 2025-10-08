// branch-context.ts
import { inject, provide, reactive } from 'vue'

export interface BranchContextType {
  currentBranch: number
  totalBranches: number
  branches: any[]
  setBranches: (branches: any[]) => void
  goToPrevious: () => void
  goToNext: () => void
}

const BranchContextKey = Symbol('BranchContext')

export function provideBranch(
  defaultBranch = 0,
  onBranchChange?: (i: number) => void,
) {
  const state = reactive({
    currentBranch: defaultBranch,
    branches: [] as any[],
  })

  const setBranches = (branches: any[]) => {
    state.branches = branches
  }

  const handleBranchChange = (newBranch: number) => {
    state.currentBranch = newBranch
    onBranchChange?.(newBranch)
  }

  const goToPrevious = () => {
    const newBranch =
      state.currentBranch > 0
        ? state.currentBranch - 1
        : state.branches.length - 1
    handleBranchChange(newBranch)
  }

  const goToNext = () => {
    const newBranch =
      state.currentBranch < state.branches.length - 1
        ? state.currentBranch + 1
        : 0
    handleBranchChange(newBranch)
  }

  const context: BranchContextType = {
    get currentBranch() {
      return state.currentBranch
    },
    get totalBranches() {
      return state.branches.length
    },
    get branches() {
      return state.branches
    },
    setBranches,
    goToPrevious,
    goToNext,
  }

  provide(BranchContextKey, context)
  return context
}

export function useBranch(): BranchContextType {
  const context = inject<BranchContextType | null>(BranchContextKey, null)
  if (!context) {
    throw new Error('Branch components must be used within a <Branch> provider')
  }
  return context
}
