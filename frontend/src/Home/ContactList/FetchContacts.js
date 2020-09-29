import {useEffect, useState} from "react";
import axios from "axios";

export default function FetchContacts(page) {

    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [pageToken, setPageToken] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: '/user/contact/list',
            params: {pageToken: pageToken}
        }).then(response => {
            setContacts(prevContacts => {
                return [...prevContacts, ...response.data.connections]
            })
            setTotalItems(response.data.totalItems);
            setPageToken(response.data.nextPageToken);
            setHasMore(!!response.data.nextPageToken);
            setLoading(false)
        })
    }, [page])
    return {
        loading, contacts, hasMore, totalItems, pageToken
    };
}
