import React, { type JSX } from 'react';

interface LinkButtonProps {
  label: string;
  url: string;
  icon: JSX.Element;
  disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ label, url, icon, disabled }) => {
  return (
    <>
      {!disabled ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-button">
          <span className="icon">{icon}</span>
          {label}
        </a>
      ) : (
        <a className="link-button disabled">
          <div className='normal'>
            <span className="icon">{icon}</span>
            {label}
          </div>
          <div className='disabled'>
            Não está disponível
          </div>
        </a>
      )}
    </>
  );
};

export default LinkButton;
