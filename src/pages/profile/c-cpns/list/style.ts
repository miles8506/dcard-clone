import styled from 'styled-components'

export const ListWrapper = styled.div`
  width: 100%;
  height: calc(100% - 48px);
  background-color: #f2f3f4;

  .profile-list {
    background-color: #fff;
  }

  .user-info {
    display: flex;
    gap: 0 16px;
    padding: 16px;

    .avatar-account {
      & > h2 {
        margin: 16px 0 10px;
        font-size: 20px;
      }
    }
  }

  .list {
    div[class$="item"] {
      display: flex;
      line-height: 44px;
      padding: 0 16px;

      div[class$="icon"] {
        display: flex;
        align-items: center;
        color: #3397cf;
        fill: currentColor;
      }

      .text {
        margin-left: 12px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.75);
      }
    }
  }

  .logout {
    line-height: 44px;
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    color: #ea5c5c;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
`
