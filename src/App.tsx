import { useRoutes } from "react-router-dom";
import router from "./routes/index"

import './globals.css';

const App = () => {
    const content = useRoutes(router);
    return (
        <div className='app'>
            {content}
        </div>
    )
}

export default App