import { Github } from 'lucide-react'
import './App.css'
import { KanbanBoard } from './components/KanbanBoard'
import { ThemeToggle } from './components/ThemeToggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {
	return (
		<>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<div className='min-h-screen flex flex-col max-w-full'>
					<header className='flex justify-between w-full flex-row p-4'>
						<Button variant='link' asChild className='text-primary h-8 w-8 p-0'>
							<a href='https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui'>
								<Github className='fill-current h-full w-full' />
							</a>
						</Button>
						<Button variant='link' asChild className='text-primary h-16 w-16'>
							<a href='https://nerdsfighting.com'>NerdsFighting</a>
						</Button>
						<ThemeToggle />
					</header>
					<main className='mx-4 flex flex-col gap-6 min-h-screen'>
						<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
							Coach's Training Board
						</h1>
						<KanbanBoard />
						<p className='leading-7 [&:not(:first-child)]:mt-6'>
							With Keyboard Controls and Screen Reader interactions.
						</p>
					</main>
				</div>
			</ThemeProvider>
		</>
	)
}

export default App
