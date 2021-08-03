import styled from 'styled-components';

const ErrorStyles = styled.div`
  margin: 16px 0;
  padding: 16px;

  background-color: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid var(--red);

  input + &,
  select + &,
  textarea + &,
  .dropzone__area + & {
    margin: 8px 0 24px;
    padding: 0;
    padding-left: 8px;

    border: none;
    border-left: 1px solid var(--red);

    p {
      color: var(--red);
    }
  }

  p {
    margin: 0;
  }

  strong {
    display: block;
    margin-bottom: 1rem;
  }
`;

export default ErrorStyles;
