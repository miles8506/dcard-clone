import styled from 'styled-components'

export const CollectWrapper = styled.div`
  background-color: inherit;
  flex: 1;

  .collect {
    height: 100%;
    padding: 20px 60px;

    &-title {
      font-size: 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      line-height: 59px;
    }

    &-main {
      position: relative;
      height: calc(100% - 48px);
      padding: 24px 0;
    }

    &-list {
      border-radius: 12px;
      overflow: hidden;
    }

    &-item {
      background-color: #fff;
    }
  }
`
