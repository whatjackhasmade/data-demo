import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  article {
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: fadeIn;
    animation-timing-function: linear;
    animation-timing-function: ease;
    opacity: 0;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    blockquote {
      display: block;
      padding: 16px 0;
      position: relative;
      margin: 24px 0 36px;

      font-size: 2.25rem;
      font-style: italic;
      outline: none;
      text-align: center;

      color: var(--black);
      quotes: '“' '”' '‘' '’';

      p:last-of-type {
        margin: 0;
      }

      @media ${device?.md} {
        margin: 8px 0 24px;

        font-size: 3rem;
      }
    }

    cite {
      position: relative;

      color: var(--grey600);
      font-size: 20px;
      font-style: normal;

      &:before {
        content: '- ';
      }

      @media ${device?.md} {
        bottom: 4px;
        position: absolute;
        right: 0;

        color: var(--grey400);
        font-size: 16px;
      }
    }

    figure {
      margin-left: 0;
      margin-right: 0;

      img {
        margin-bottom: 8px;
      }
    }

    li + li {
      margin-top: 8px;
    }

    > * + * {
      margin-top: 16px;
    }

    > h2 + * {
      margin-top: 24px;
    }

    > img + *,
    > figure + * {
      margin-top: 32px;
    }

    > * + h2 {
      margin-top: 64px;
    }

    > * + h3 {
      margin-top: 48px;
    }

    > * + img {
      margin-top: 32px;
    }

    > * + h4 {
      margin-top: 48px;
    }

    > img + img,
    > figure + figure {
      margin-top: 32px;
    }

    > h2 + h3 {
      margin-top: 32px;
    }

    > h3 + h4 {
      margin-top: 32px;
    }

    img,
    picture {
      display: block;
      margin: 48px 0;

      > img {
        margin: 0;
      }
    }

    img {
      height: auto !important;
      width: auto !important;
    }

    .wp-block-image {
      text-align: center;

      img,
      picture,
      video {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export default exportedCSS;
