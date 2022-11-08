import { memo, ChangeEvent } from 'react'

import useEditor from '@/base-ui/MSEditor/use-editor'
import { usePostContext } from '@/context/post-context'

import { EditorWrapper } from './style'
import MSEditor from '@/base-ui/MSEditor'
// import { EditorState } from 'draft-js'
// import { default as DraftEditor } from '@draft-js-plugins/editor'
// import { stateToHTML } from 'draft-js-export-html'
// import { stateFromHTML } from 'draft-js-import-html'
// import createImagePlugin from '@draft-js-plugins/image'

const Editor = memo(() => {
  const { editorState, setEditorState } = useEditor()
  const { MSEditorRef, title, changeTitle } = usePostContext()
  // const MSEditorRef = useRef<any>(null)
  // const [editorState, setEditorState] = useState(EditorState.createEmpty())

  // const imagePlugin = createImagePlugin()
  // const plugins = [imagePlugin]

  // const getEditorHTML = () => {
  //   // editor to html
  //   // console.log(stateToHTML(editorState.getCurrentContent()))

  //   // find first img
  //   const res = stateToHTML(editorState.getCurrentContent()).replaceAll('<figure>', 'hash!@#$%^&*()').replaceAll('</figure>', 'hash!@#$%^&*()').split('hash!@#$%^&*()').find(item => item.includes('data:image/jpeg;base64'))
  //   console.log(res);

  //   // html to editor
  //   // setEditorState(EditorState.createWithContent(stateFromHTML(``)))

  // }

  // const handleImageFile = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (!event.target.files) return
  //   const file = event.target.files[0]
  //   const reader = new FileReader()
  //   reader.onload = function (event) {
  //     setEditorState((imagePlugin.addImage as any)(
  //       editorState,
  //       event.target?.result,
  //     ))
  //   }
  //   reader.readAsDataURL(file)
  // }

  return (
    <EditorWrapper>
      <div className="editor">
        <div className="editor-title">
          <textarea placeholder="標題"
            value={title}
            onInput={(event: ChangeEvent<HTMLTextAreaElement>) => changeTitle(event.target.value)}
          />
        </div>
        <div className="editor-body">
          <MSEditor
            editorState={editorState}
            setEditorState={setEditorState}
            ref={MSEditorRef}
          />
        </div>
        {/* <div className="editor-footer">
          <button onClick={() => MSEditorRef.current?.getEditorHTML()}>
            click
          </button>
          <input
            type="file"
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              MSEditorRef.current?.handleImageFile(e)
            }
          />
          <div className="function-wrap">

          </div>
          <div className="step-wrap">

          </div>
        </div> */}
      </div>
    </EditorWrapper>
  )
})

export default Editor
