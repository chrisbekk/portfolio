import { RouterProvider } from 'react-router-dom';
import { Landing } from './components/Landing';
import { useState } from 'react';
import { router } from './router';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
