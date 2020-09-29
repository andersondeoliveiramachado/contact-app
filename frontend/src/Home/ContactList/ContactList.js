import React, {useCallback, useRef, useState} from "react";
import FetchContacts from "./FetchContacts";

import './ContactList.css';
import ContactCard from "./ContactCard/ContactCard";

export default function ContactList() {
    const [page, setPage] = useState(0);
    const {loading, contacts, hasMore, totalItems} = FetchContacts(page);

    const observer = useRef();
    const lastContactElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(page + 1)
            }
        })
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);
    return (

        <div className='gutter-spaces'>
            <div className='contacts-count'>{totalItems ? `Contacts: ${totalItems}` : null}</div>
            {contacts.map((contact, index) => {
                if (contacts.length === index + 1) {
                    return <div key={contact.resourceName} ref={lastContactElementRef}>
                        <ContactCard contact={contact} index={index}/>
                    </div>
                }
                return <div key={contact.resourceName}>
                    <ContactCard contact={contact} index={index}/>
                </div>
            })}
            <div>{loading && 'Loading...'}</div>
        </div>
    )
}
