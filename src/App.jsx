import { RouterProvider } from 'react-router-dom';
import { router } from './router';
function App() {
  return (
    <div className="font-primary">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
