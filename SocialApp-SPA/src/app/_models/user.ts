import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    nickname: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    education?: string;
    introduction?: string;
    photos?: Photo[];
}
