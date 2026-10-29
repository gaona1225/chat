// 5000 项列表过滤 - 一个 5000 项的列表，输入框过滤时用 useMemo 缓存过滤结果
import {useState, useMemo} from 'react';
type ListItem = {
    id: string,
    text: string
}

export default function FilterList() {
    const [searchKey, setSearchKey] = useState('');
    const initList:ListItem[] = useMemo(() => {
        const list:ListItem[] = [];
        for (let i = 0; i < 5000; i++) {
            const listItem = {
                id : `id${i+1}`,
                text: `${i+1}List`
            }
            // list = [...list, listItem];
            list.push(listItem);
        }
        return list;
    }, [])
    const changeHandle = (e:React.ChangeEvent<HTMLInputElement>) => setSearchKey(e.target.value);
    // const filterList = () => initList.filter(item => item.text.startsWith(searchKey));
    
    // const showList:ListItem[] = useMemo(() => filterList(), [searchKey])
    const showList:ListItem[] = useMemo(() => initList.filter(item => item.text.startsWith(searchKey)), [searchKey, initList])

    return (
        <div>
            <input placeholder='please input filterKey' onChange={changeHandle} />
            <ul>
                {showList.map(item => (
                    <li key = {item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}