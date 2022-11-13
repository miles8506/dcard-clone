import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;

  .article {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #888;
    }
  }
`
