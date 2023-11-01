import { Header } from './components';
import { AppRouter } from './routers/appRouter';
import './styles/components/_button.scss';

export const App = () => {
    return (
        <>
            <Header/>
            <AppRouter />
        </>
    )
};