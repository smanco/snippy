export interface IProfile {
    id: string;
    username: string;
    avatar_url?: string;
    website?: string;
    active?: boolean;
    updated_at?: Date;
}

export interface ISnippet {
    id: string;
    title: string;
    code: string;
    author: string; // IProfile.id
    description?: string;
    private?: boolean;
    created_at?: Date;
}

export interface ITeam {
    id: string;
    name: string;
    created_at?: Date;
    active?: boolean;
}

export interface ITag {
    id: string;
    label: string;
    created_at?: Date;
    color?: string;
}

export interface ISnippetTag {
    snippert: string; // ISnippet.id
    tag: string; // ITag.id
    cretaed_at?: Date;
}

export interface IUserTeam {
    user: string; // IProfice.id
    team: string; // ITeam.id
    cretaed_at?: Date;
}
