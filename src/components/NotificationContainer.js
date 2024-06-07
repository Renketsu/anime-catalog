import React, { useState } from "react";
import styled from "styled-components";

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.cardShadow};
`;

const Notification = ({ message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <NotificationContainer>
      {message}
      <button onClick={() => setVisible(false)}>Close</button>
    </NotificationContainer>
  );
};

export default Notification;
