import {
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

export interface IGetEditorHTML {
  postHTMLString: string
  firstImage: string
}

export interface IHandle {
  getEditorHTML: () => IGetEditorHTML
  setEditorHTML: () => void
  handleImageFile: (event: ChangeEvent<HTMLInputElement>) => void
}

const MSEditor = forwardRef<IHandle, IProps>(
  ({ editorState, setEditorState }, ref) => {
    const MSEditorRef = useRef<any>(null)
    // const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const imagePlugin = createImagePlugin()
    const plugins = [imagePlugin]

    const getEditorHTML = () => {
      // editor to html
      const postHTMLString = stateToHTML(editorState.getCurrentContent())

      // find first img
      const firstImage = stateToHTML(editorState.getCurrentContent())
        .replaceAll('<figure>', 'hash!@#$%^&*()')
        .replaceAll('</figure>', 'hash!@#$%^&*()')
        .split('hash!@#$%^&*()')
        .find((item) => item.includes('src=\"data:image/jpeg;base64'))

      return {
        postHTMLString,
        firstImage
      }
    }

    const setEditorHTML = () => {
      // html to editor
      // setEditorState(EditorState.createWithContent(stateFromHTML(``)))
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

    useImperativeHandle(ref, () => ({
      getEditorHTML() {
        return getEditorHTML() as IGetEditorHTML
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
  }
)

export default MSEditor
