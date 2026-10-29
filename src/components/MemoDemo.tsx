import { useState, useCallback } from 'react';
import MemoChild from './MemoChild';

export default function MemoDemo() {
    const [count, setCount] = useState(0);
    const handleAction = useCallback(() => {
        console.log('点了子组件按钮');
    }, []);

    return (
        <div>
            <p>父组件计数：{count}</p>
            <button onClick={() => setCount(c => c + 1)}>父组件 +1</button>
            <div>
                <MemoChild label="每次新建函数" onAction={() => console.log('点了子组件按钮')} />
                <MemoChild label="useCallback 版" onAction={handleAction} />
            </div>
        </div>
    );
}
