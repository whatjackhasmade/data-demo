import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    margin: 16px 0;

    font-weight: var(--weightBold);
  }

  h1,
  .h1 {
    margin-bottom: 24px;
    margin-top: 24px;

    color: var(--primary);
    font-size: 32px;
    font-weight: var(--weightBold);
    line-height: 1.1;

    @media ${device?.lg} {
      font-size: 40px;
    }
  }

  h2,
  .h2 {
    color: var(--primary);
    font-size: 30px;

    @media ${device?.lg} {
      font-size: 32px;
    }

    main > & {
      margin-top: 92px;
    }
  }

  h3,
  .h3 {
    font-size: 24px;

    @media ${device?.lg} {
      font-size: 30px;
    }
  }

  h4,
  .h4 {
    font-size: 20px;

    @media ${device?.lg} {
      font-size: 24px;
    }
  }

  h5,
  .h5 {
    font-size: 18px;

    @media ${device?.lg} {
      font-size: 20px;
    }
  }

  h6,
  .h6 {
    font-size: 16px;

    @media ${device?.lg} {
      font-size: 18px;
    }
  }
`;

export default exportedCSS;
