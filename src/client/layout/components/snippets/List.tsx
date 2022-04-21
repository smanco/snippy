import React, { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import supabase from '@sb/client';
import useProfileStore from '@store/useProfileStore';
import { Snippet } from 'src/@types/store';
import ListStyled from '@styles/components/snippets/ListStyled';

const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const snippetList = useProfileStore(state => state.snippetList);
    const setSnippetList = useProfileStore(state => state.setSnippetList);

    useEffect(() => {
        getSnippetList();
    }, []);

    const getSnippetList = async () => {
        try {
            setLoading(true);
            const user: User = supabase.auth.user() as User;

            let { data, error, status } = await supabase
                .from('snippet')
                .select(`title, code`)
                .order('created_at', { ascending: false })
                .eq('author', user.id);

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setSnippetList(data);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getList =
        snippetList &&
        snippetList.map((snippet, index) => {
            return (
                <div key={`snippet_${index}`}>
                    <hr />
                    <h4>{snippet.title}</h4>
                    <pre>
                        <code>{snippet.code}</code>
                    </pre>
                </div>
            );
        });

    return (
        <ListStyled>
            <h3>Snippets</h3>
            {loading ? 'Saving ...' : getList}
        </ListStyled>
    );
};

export default List;
