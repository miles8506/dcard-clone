import styled from 'styled-components'

export const PostWrapper = styled.div`
  height: 100%;

  .post {
    display: flex;
    flex-direction: column;
    height: calc(100% - 48px);
    padding: 20px 80px;
    background-color: #fff;
    overflow: auto;
  }


  // draft editor
  .DraftEditor-root {
    font-size: 16px;
  }

  .public-DraftEditorPlaceholder-inner {
    position: absolute;
    color: rgba(0, 0, 0, 0.35);
    font-size: 16px;
  }
`
