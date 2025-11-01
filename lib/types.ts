// export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

// export interface Note {
//     id: string;
//     title: string;
//     content: string;
//     tag: NoteTag;
//     createdAt: string;
//     updatedAt: string;
// }

// export interface NormalizedNotesResponse {
//     data: Note[];
//     meta: {
//         totalItems: number;
//         page: number;
//         perPage: number;
//         totalPages: number;
//     };
// }

export type DefinedNoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export type NoteTag = DefinedNoteTag | (string & {});
export type NoteTagFromUrl = DefinedNoteTag | 'all' | string;

export interface Note {
    id: string;
    title: string;
    content: string;
    tag: DefinedNoteTag;
    createdAt: string;
    updatedAt: string;
}

export interface NormalizedNotesResponse {
    data: Note[];
    meta: {
        totalItems: number;
        page: number;
        perPage: number;
        totalPages: number;
    };
}
