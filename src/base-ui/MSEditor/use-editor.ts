import { useState } from 'react'
import { EditorState } from 'draft-js'

export default function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  return {
    editorState,
    setEditorState
  }
}