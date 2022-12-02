import { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title}  - Thrifty store`;

    }, [title])
};

export default UseTitle;