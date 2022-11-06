import {
  memo,
  FC,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useImperativeHandle,
  forwardRef,
  useRef
} from 'react'

import { MSEditorWrapper } from './style'
import { EditorState } from 'draft-js'
import { default as DraftEditor } from '@draft-js-plugins/editor'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'
import createImagePlugin from '@draft-js-plugins/image'

interface IProps {
  editorState: EditorState
  setEditorState: Dispatch<SetStateAction<EditorState>>
}

export interface IImperativeHandle {
  getEditorHTML: () => void
  setEditorHTML: () => void
}

const MSEditor = memo(
  forwardRef<HTMLDivElement, IProps>(({ editorState, setEditorState }, ref) => {
    const MSEditorRef = useRef<any>(null)
    // const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const imagePlugin = createImagePlugin()
    const plugins = [imagePlugin]

    const getEditorHTML = () => {
      // editor to html
      console.log(stateToHTML(editorState.getCurrentContent()))

      // find first img
      // const res = stateToHTML(editorState.getCurrentContent())
      //   .replaceAll('<figure>', 'hash!@#$%^&*()')
      //   .replaceAll('</figure>', 'hash!@#$%^&*()')
      //   .split('hash!@#$%^&*()')
      //   .find((item) => item.includes('data:image/jpeg;base64'))
      // console.log(res)

      // html to editor
      // setEditorState(EditorState.createWithContent(stateFromHTML(``)))
    }

    const setEditorHTML = () => {
      console.log('set')
    }

    const handleImageFile = (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = function (event) {
        setEditorState(
          (imagePlugin.addImage as any)(editorState, event.target?.result)
        )
      }
      reader.readAsDataURL(file)
    }

    useImperativeHandle<any, IImperativeHandle>(ref, () => ({
      getEditorHTML() {
        getEditorHTML()
      },
      setEditorHTML() {
        setEditorHTML()
      },
      handleImageFile(event: ChangeEvent<HTMLInputElement>) {
        handleImageFile(event)
      }
    }))

    return (
      <MSEditorWrapper ref={MSEditorRef}>
        <DraftEditor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          placeholder="描述"
        />
      </MSEditorWrapper>
    )
  })
)

export default MSEditor
