import { css } from 'styled-components';

const exportedCSS = css`
  #nprogress .bar {
    background: var(--primary) !important;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px var(--primary), 0 0 5px var(--primary);
  }

  #nprogress .spinner-icon {
    border-top-color: var(--primary);
    border-left-color: var(--primary);
  }
`;

export default exportedCSS;
