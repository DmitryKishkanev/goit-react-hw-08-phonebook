import styled from '@emotion/styled';

const ContactPageBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 85.98px);
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContactPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

export { ContactPageBackdrop, ContactPageBox };
