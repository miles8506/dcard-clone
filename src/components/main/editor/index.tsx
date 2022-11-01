import { memo, useState } from 'react'

import 'draft-js/dist/Draft.css'

import { EditorWrapper } from './style'
import { EditorState } from 'draft-js'
import { default as DraftEditor } from '@draft-js-plugins/editor'
import { stateToHTML } from 'draft-js-export-html'
import createImagePlugin from '@draft-js-plugins/image'

const Editor = memo(() => {
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
)

const foo = () => {
  // edit to html
  console.log(stateToHTML(editorState.getCurrentContent()))
}

const imagePlugin = createImagePlugin()
const plugins = [imagePlugin]

const bar = (urlPath: any) => {
  setEditorState((imagePlugin.addImage as any)(
    editorState,
    urlPath,
  ))
}

const changeFile = (e: any) => {
  const curFile = e.target.files[0]
  const reader = new FileReader()
  reader.onload = function (e) {
    bar(e.target?.result)
  }
  reader.readAsDataURL(curFile)
}

  return (
    <EditorWrapper>
      <div className="editor">
        <DraftEditor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          placeholder="123"
        />
      </div>
      <button onClick={foo}>click</button>
      <button onClick={bar}>image</button>
      <input type="file" onInput={(e) => changeFile(e)} />
    </EditorWrapper>
  )
})

export default Editor
