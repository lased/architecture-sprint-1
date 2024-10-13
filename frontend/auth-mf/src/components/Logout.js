import React from 'react';

import '../blocks/logout/logout.css';

function Logout({ onSignOut }) {
  function handleSignOut() {
    onSignOut?.();
  }

  return (
    <button className="logout" onClick={handleSignOut}>
      Выйти
    </button>
  );
}

export default Logout;
