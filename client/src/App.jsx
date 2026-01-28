import Routes from "@/pages/Routes.jsx";
import { ThemeProvider } from '@/provider/theme-provider'

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Routes/>
        </ThemeProvider>
    )
}

export default App