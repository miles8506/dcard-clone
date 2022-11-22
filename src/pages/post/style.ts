import styled from 'styled-components'

export const PostWrapper = styled.div`
  height: 100%;

  .post {
    height: calc(100% - 48px);
    padding: 20px 80px;
    background-color: #fff;
    overflow: auto;

    .post-box {
      display: flex;
      flex-direction: column;
      max-width: 1280px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
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

  @media screen and (max-width: 992px) {
    .post {
      padding: 10px 16px;
    }
  }
`
