import {useState} from "react";

const useTags = () =>{
    const [tags, setTags] = useState<string[]>(['衣服', '住房', '餐饮', '交通']);
    return {tags, setTags}
}

export {useTags}