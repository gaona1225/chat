// memo 子组件
import { memo } from 'react';

type MemoChildProps = {
    label: string;
    onAction: () => void;
};

function MemoChild({ label, onAction }: MemoChildProps) {
    console.log(`${label} 渲染了`);
    return <button onClick={onAction}>{label}</button>;
}

export default memo(MemoChild);
