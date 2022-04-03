import { AppRouter } from './routers/AppRouter';

export const Clistore = () => {
    return (
        <main className="bg-violet-800 h-screen w-full p-8 flex flex-col items-center gap-8">
            <AppRouter />
        </main>
    )
}
