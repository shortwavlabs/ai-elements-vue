# AI Elements Vue

A command-line interface for installing [AI Elements Vue](https://ai-sdk.dev/elements) components - a component library built on top of [shadcn-vue](https://www.shadcn-vue.com/) to help you build AI-native applications faster. // TODO: update URL

## Overview

AI Elements Vue provides pre-built, customizable React components specifically designed for AI applications, including conversations, messages, code blocks, reasoning displays, and more. The CLI makes it easy to add these components to your Next.js project.

## Installation

You can use the AI Elements Vue CLI directly with npx, or install it globally:

```bash
# Use directly (recommended)
npx ai-elements-vue@latest

# Or using shadcn cli
# TODO: udpate URL
npx shadcn-vue@latest add https://registry.ai-sdk.dev/all.json
```

## Prerequisites

Before using AI Elements, ensure your project meets these requirements:

- **Node.js** 18 or later
- **Nuxt.js** project with [AI SDK](https://ai-sdk.dev/) installed
- **shadcn-vue** initialized in your project (`npx shadcn-vue@latest init`)
- **Tailwind CSS** configured (AI Elements Vue supports CSS Variables mode only)

## Usage

### Install All Components

Install all available AI Elements components at once:

```bash
npx ai-elements-vue@latest
```

This command will:

- Set up shadcn-vue if not already configured
- Install all AI Elements components to your configured components directory
- Add necessary dependencies to your project

### Install Specific Components

Install individual components using the `add` command:

```bash
npx ai-elements-vue@latest add <component-name>
```

Examples:

```bash
# Install the message component
npx ai-elements-vue@latest add message

# Install the conversation component
npx ai-elements-vue@latest add conversation

# Install the code-block component
npx ai-elements-vue@latest add code-block
```

### Alternative: Use with shadcn CLI

You can also install components using the standard shadcn-vue CLI:

```bash
# Install all components
# TODO: udpate URL
npx shadcn-vue@latest add https://registry.ai-sdk.dev/all.json

# Install a specific component
# TODO: udpate URL
npx shadcn-vue@latest add https://registry.ai-sdk.dev/message.json
```

## Available Components

AI Elements includes the following components:

| Component                  | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| `actions`                  | Interactive action buttons for AI responses             |
| `branch`                   | Branch visualization for conversation flows             |
| `code-block`               | Syntax-highlighted code display with copy functionality |
| `conversation`             | Container for chat conversations                        |
| `image`                    | AI-generated image display component                    |
| `inline-citation`          | Inline source citations                                 |
| `loader`                   | Loading states for AI operations                        |
| `message`                  | Individual chat messages with avatars                   |
| `prompt-form`              | Controlled form wrapper for prompt submission           |
| `prompt-input`             | Advanced input component with model selection           |
| `prompt-input-attachments` | Opt-in file/image attachments for prompt input          |
| `reasoning`                | Display AI reasoning and thought processes              |
| `response`                 | Formatted AI response display                           |
| `source`                   | Source attribution component                            |
| `suggestion`               | Quick action suggestions                                |
| `task`                     | Task completion tracking                                |
| `tool`                     | Tool usage visualization                                |
| `web-preview`              | Embedded web page previews                              |

## Quick Start Example

After installing components, you can use them in your Nuxt / Vue application:

```tsx
'use client'

// TODO: update code example
import { useChat } from '@ai-sdk/react'
import {
  Conversation,
  ConversationContent,
} from '@/components/ai-elements/conversation'
import { Message, MessageContent } from '@/components/ai-elements/message'
import { Response } from '@/components/ai-elements/response'

export default function Chat() {
  const { messages } = useChat()

  return (
    <Conversation>
      <ConversationContent>
        {messages.map((message, index) => (
          <Message key={index} from={message.role}>
            <MessageContent>
              <Response>{message.content}</Response>
            </MessageContent>
          </Message>
        ))}
      </ConversationContent>
    </Conversation>
  )
}
```

## How It Works

The AI Elements CLI:

1. **Detects your package manager** (npm, pnpm, yarn, or bun) automatically
2. **Fetches component registry** from `https://registry.ai-sdk.dev/registry.json` // TODO: update URL
3. **Installs components** using the shadcn-vue CLI under the hood
4. **Adds dependencies** and integrates with your existing shadcn-vue setup

Components are installed to your configured shadcn-vue components directory (typically `@/components/ai-elements-vue/`) and become part of your codebase, allowing for full customization.

## Configuration

AI Elements uses your existing shadcn-vue configuration. Components will be installed to the directory specified in your `components.json` file.

## Recommended Setup

For the best experience, we recommend:

1. **CSS Variables**: Use shadcn-vue's CSS Variables mode for theming
2. **TypeScript**: Enable TypeScript for better development experience
