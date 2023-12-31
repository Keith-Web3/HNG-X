import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/index.scss'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: '16px',
          maxWidth: 'max-content',
          padding: '16px 24px',
          color: '#333333',
        },
      }}
    />
  </>
)
