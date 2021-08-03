import styled from 'styled-components';

const StyledSkeleton = styled.div`
  display: inline-block;
  height: var(--height);
  width: var(--width);

  background: linear-gradient(100deg, var(--grey100) 30%, var(--offWhite) 50%, var(--grey100) 70%);

  background-size: 400%;
  color: transparent;

  animation: loading 1.5s ease-in-out infinite;

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export default StyledSkeleton;
