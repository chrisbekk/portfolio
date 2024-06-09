import React, { useEffect, useState } from 'react';

import { Card } from '../Card';
import { useFetchProjects } from '../../hooks/useFetchProjects';
import { Loading } from './Loading';
import { Error } from './Error';

export const Projects = () => {
  const { projects, error, loading } = useFetchProjects();
  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-10">
      {projects.map(project => (
        <Card key={project.id} data={project} />
      ))}
    </div>
  );
};
