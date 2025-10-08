<script setup lang="ts">
import {
  Artifact,
  ArtifactAction,
  ArtifactActions,
  ArtifactContent,
  ArtifactDescription,
  ArtifactHeader,
  ArtifactTitle,
} from '@repo/elements/artifact'
// import { CodeBlock } from '@repo/elements/code-block'
import {
  CopyIcon,
  DownloadIcon,
  PlayIcon,
  RefreshCwIcon,
  ShareIcon,
} from 'lucide-vue-next'
</script>
<template>
  <div class="w-full h-[calc(100%-69px)] flex items-center justify-center">
    <Artifact class="w-[600px] h-[400px]">
      <ArtifactHeader>
        <div>
          <ArtifactTitle>Dijkstra's Algorithm Implementation</ArtifactTitle>
          <ArtifactDescription>Updated 1 minute ago</ArtifactDescription>
        </div>
        <div className="flex items-center gap-2">
          <ArtifactActions>
            <ArtifactAction
              :icon="PlayIcon"
              label="Run"
              @click="() => console.log('Run')"
              tooltip="Run code"
            />
            <ArtifactAction
              :icon="CopyIcon"
              label="Copy"
              @click="() => console.log('Copy')"
              tooltip="Copy to clipboard"
            />
            <ArtifactAction
              :icon="RefreshCwIcon"
              label="Regenerate"
              @click="() => console.log('Regenerate')"
              tooltip="Regenerate content"
            />
            <ArtifactAction
              :icon="DownloadIcon"
              label="Download"
              @click="() => console.log('Download')"
              tooltip="Download file"
            />
            <ArtifactAction
              :icon="ShareIcon"
              label="Share"
              @click="() => console.log('Share')"
              tooltip="Share artifact"
            />
          </ArtifactActions>
        </div>
      </ArtifactHeader>
      <ArtifactContent className="p-0">
        <!-- <CodeBlock
        className="border-none"
        code={code}
        language="python"
        showLineNumbers
      /> -->
      </ArtifactContent>
    </Artifact>
  </div>
</template>
