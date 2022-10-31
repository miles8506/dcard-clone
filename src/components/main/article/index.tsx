import { memo, useState } from 'react'

import { ArticleWrapper } from './style'
import CloseIcon from '@/assets/svg/close-icon'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'

import { EditorState } from 'draft-js'
import Editor from '@draft-js-plugins/editor'
import { stateToHTML } from 'draft-js-export-html'
import createImagePlugin from '@draft-js-plugins/image'
import 'draft-js/dist/Draft.css'
import BottomBar from './bottom-bar'

const Article = memo(() => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  const foo = () => {
    // edit to html
    console.log(stateToHTML(editorState.getCurrentContent()))
  }

  const imagePlugin = createImagePlugin()
  const plugins = [imagePlugin]

  const bar = () => {
    setEditorState((imagePlugin.addImage as any)(
      editorState,
      'https://cs-c.ecimg.tw/items/DRAF01A9007KK0I/000001_1665628051.jpg',
    ))
  }

  return (
    <ArticleWrapper>
      <div className="article">
        <div className="article-header">
          <div className="article-header-user">
            <span className="user-avatar">
              <AvatarBoyIcon width={32} height={32} />
            </span>
            <span className="user-name">a09112332@gmail.com</span>
          </div>
          <div className="article-header-close-icon">
            <CloseIcon />
          </div>
        </div>
        <h2 className="article-title">我是title</h2>
        <div className="article-info">
          <div className="article-info-sort">NBA</div>
          <span className="article-info-division">·</span>
          <div className="article-info-date">2022-01-01</div>
        </div>
        <div className="article-content">
          <div className="editor">
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              plugins={plugins}
              placeholder='123'
            />
          </div>
          <button onClick={foo}>click</button>
          <button onClick={bar}>image</button>
        </div>
      </div>
      <BottomBar />
    </ArticleWrapper>
  )
})

export default Article
