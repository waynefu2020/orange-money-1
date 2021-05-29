import {useState} from "react";
import {create} from "domain";
import {createId} from "./lib/createId";

const defaultTags = [
    {id: createId(), name: '衣服'},
    {id: createId(), name: '住房'},
    {id: createId(), name: '餐饮'},
    {id: createId(), name: '交通'}
]
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
    const findTag = (id:number) => tags.filter(tag=>tag.id===id)[0]
    const findTagIndex = (id: number) =>{
        let result = -1
        for(let i = 0;i<tags.length;i++){
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result
    }
    const updateTag = (id:number, obj: {name: string}) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index,1,{id:id, name:obj.name})
        setTags(tagsClone)
    }
    return {tags, setTags, findTag, updateTag, findTagIndex}
}

export {useTags}