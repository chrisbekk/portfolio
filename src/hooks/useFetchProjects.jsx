import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('projects') // Ensure your table name is correct
          .select();

        if (error) {
          throw error;
        }

        setProjects(data);
        console.log(projects);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { projects, error, loading };
};
