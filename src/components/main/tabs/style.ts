import styled from "styled-components"
import type { ThemePropsType } from "@/assets/theme"

export const TabsWrapper = styled.div<ThemePropsType>`
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  min-width: 728px;
  margin: 0 12px 47px;

  .tabs {
    height: 100%;

    &-top {
      position: sticky;
      top: 48px;
      padding: 20px 60px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      background-color: #fff;
      border-radius: 12px 12px 0 0;
      z-index: 5;

      &-select {
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(calc(-50% + 8px));
      }
    }
/*
    .wrap {
      position: relative;
    } */

    &-content {
      position: relative;
      height: calc(100% - 81px);

      .add-article-icon {
        position: fixed;
        right: 25px;
        bottom: 60px;
        width: 44px;
        height: 44px;
        padding: 10px;
        text-align: center;
        background-color: ${props => props.theme.iconColor.collect};
        border-radius: 12px;
        box-shadow: 0 3px 12px ${props => props.theme.iconColor.collect};
      }
    }
  }

  @media screen and (max-width: 992px) {
    min-width: auto;
    height: 100%;
    margin: 0 0 47px;
    border-radius: 0 0 0 0;

    .tabs-top {
      padding: 0;

      &-select {
        display: none;
      }
    }
  }
`
