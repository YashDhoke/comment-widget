# Comment Widget

A clean, modular React component for submitting field suggestions with comments and supporting documents.

🔗 **Live Demo:** https://comment-widget-rho.vercel.app/

---

## What it does

This component allows users to suggest changes to a field value by providing a comment and optionally attaching a supporting document. It has three distinct states:

- **Initial** — shows the current field value with an empty form
- **Editing** — user has started filling in the suggestion form
- **Submitted** — displays the submitted comment with options to edit or delete

A separate floating **Comment dialog** lets users have a threaded discussion, with a scrollable list of comments and a composer at the bottom.

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **JavaScript (ES6+)**

---

## Project Structure

```
src/
├── components/
│   └── CommentWidget/
│       ├── hooks/
│       │   ├── useCommentForm.js       # Three-state form logic
│       │   └── useCommentDialog.js     # Dialog open/close + comment list
│       ├── utils/
│       │   └── formatters.js           # File size, time, ID helpers
│       ├── Avatar.jsx                  # Initials-based user avatar
│       ├── FileUpload.jsx              # Controlled file input
│       ├── DocumentBadge.jsx           # Attached document display
│       ├── CommentForm.jsx             # Renders all three form states
│       ├── CommentDialog.jsx           # Floating dark comment thread
│       └── index.jsx                  # Root orchestrator component
├── App.jsx
├── main.jsx
└── index.css
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Usage

```jsx
import CommentWidget from "./components/CommentWidget";

<CommentWidget
  currentValue="The quick brown fox jumps over the lazy dog"
  fieldLabel="Field label"
  initialComments={[]}
  onSubmit={(payload) => console.log(payload)}
  onDiscard={() => console.log("discarded")}
/>
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `currentValue` | `string` | The existing field value to display |
| `fieldLabel` | `string` | Label shown above the input field |
| `initialComments` | `array` | Pre-existing comments for the dialog |
| `onSubmit` | `function` | Called with payload when suggestion is submitted |
| `onDiscard` | `function` | Called when the form is discarded |

---

## Features

- Three-state form (initial → editing → submitted)
- File upload with name and size display
- Eye and download actions on attached documents
- Floating comment dialog with scrollable thread
- Avatar with deterministic color from user name
- All business logic in custom hooks — components are purely presentational
