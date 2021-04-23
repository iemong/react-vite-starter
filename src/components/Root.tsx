import React from 'react'
import { RecoilRoot } from 'recoil'
import App from '~/components/App'
import { DebugObserver } from '~/recoil/DebugObserver'

const Root = (): JSX.Element => {
    return (
        <RecoilRoot>
            <DebugObserver />
            <App />
        </RecoilRoot>
    )
}

export default Root
