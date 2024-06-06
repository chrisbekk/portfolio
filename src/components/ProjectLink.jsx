import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectLink = ({ children, path }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={path}
      className="flex gap-4 items-center"
    >
      {children}
    </a>
  );
};
