import {Suspense, lazy} from 'react';

const BigList = lazy(() => import('./BigList'))
const Loading = () => {
    return (<p>Loading...</p>)
}

export default function SuspenseEg() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <BigList/>
            </Suspense>
        </div>
    )
}