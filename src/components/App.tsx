import React, { useState } from 'react'
import logo from '~/assets/images/logo.svg'
import styles from './app.module.css'

const App = (): JSX.Element => {
    const [count, setCount] = useState(0)

    return (
        <div className="text-center">
            <header className={styles.header}>
                <img
                    src={logo}
                    className="h-96 pointer-events-none"
                    alt="logo"
                />
                <p>Hello Vite + React!</p>
                <p>
                    <button
                        className={styles.button}
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="text-blue"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
