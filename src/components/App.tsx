import React, { useState } from 'react'
import logo from '~/assets/images/logo.svg'
import styles from './app.module.css'
import Button from '~/components/atoms/Button'
import { useRecoilState, useRecoilValue } from 'recoil'
import { charCountState, textState } from '~/recoil/atoms/text'

const App = (): JSX.Element => {
    const [count, setCount] = useState(0)
    const [text, setText] = useRecoilState(textState)
    const textLength = useRecoilValue(charCountState)

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

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
                    <Button onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </Button>
                </p>
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={handleChangeText}
                        className="text-black"
                    />
                    <p>Character Count: {textLength}</p>
                </div>
            </header>
        </div>
    )
}

export default App
