import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthProvider.jsx'
import ClickSpark from './Animation/ClickSpark/ClickSpark.jsx'

// ✅ Detect system theme
function AppWithSpark() {
  const [sparkColor, setSparkColor] = useState('#111'); 
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateColor = () => {
      setSparkColor(mediaQuery.matches ? '#fff' : '#111');
    };

    updateColor(); // Initial call
    mediaQuery.addEventListener('change', updateColor);

    return () => {
      mediaQuery.removeEventListener('change', updateColor);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ClickSpark>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithSpark />
  </StrictMode>
);
