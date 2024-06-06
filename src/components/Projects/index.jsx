import React, { useEffect, useState } from 'react';

import { Card } from '../Card';
import { useFetchProjects } from '../../hooks/useFetchProjects';

export const Projects = () => {
  const { projects, error, loading } = useFetchProjects();
  if (error) return <p>ERROR</p>;
  if (loading) return <p>LOADING....</p>;

  return (
    <div className="flex flex-col gap-10">
      {projects.map(project => (
        <Card key={project.id} data={project} />
      ))}
    </div>
  );
};
