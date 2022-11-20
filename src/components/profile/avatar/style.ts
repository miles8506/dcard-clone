import styled from "styled-components";

export const AvatarWrapper = styled.div`
  padding: 20px 0;

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &-account {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 16px 0px 10px;
      color: #fff;
      font-size: 24px;
    }
  }
`
