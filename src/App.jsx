import { RouterProvider } from 'react-router-dom';
import { Landing } from './components/Landing';
import { useState } from 'react';
import { router } from './router';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="bg-zinc-800">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
