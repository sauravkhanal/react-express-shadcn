import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="h-screen w-screen flex justify-center items-center">
                <ModeToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;
