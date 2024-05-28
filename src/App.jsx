import { RouterProvider } from 'react-router-dom';
import { router } from './router';
function App() {
  return (
    <div className="bg-zinc-800">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
