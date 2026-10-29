import {useState, useMemo, useTransition} from 'react';

type ListItem = {
    id: string,
    text: string
}

export default function Transition() {
    const [searchKey, setSearchKey] = useState('');
    const [isPending, startTransition] = useTransition();
    const initList:ListItem[] = useMemo(() => {
        const list:ListItem[] = [];
        for (let i = 0; i < 5000; i++) {
            const listItem = {
                id : `id${i+1}`,
                text: `${i+1}List`
            }
            list.push(listItem);
        }
        return list;
    }, [])
    const changeHandle = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value;
        // setSearchKey(inputVal)
        startTransition(() => setSearchKey(inputVal))
    };
    const filterList = () => initList.filter(item => item.text.startsWith(searchKey));
    
    const showList:ListItem[] = useMemo(() => filterList(), [searchKey])

    return (
        <div>
            <input placeholder='please input filterKey' onChange={changeHandle} />
            <ul style={{background: '#aaa', opacity: isPending ? '0.5' : 1}}>
                {showList.map(item => (
                    <li key = {item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}