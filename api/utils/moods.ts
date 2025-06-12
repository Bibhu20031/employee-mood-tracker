export enum Mood{
    Happy= 'Happy',
    Neutral= 'Neutral',
    Sad = 'Sad',
}

export type moodEntries = {
    mood: Mood;
    comment?:string;
    createdAt:Date;
}

export const moods:moodEntries[]=[];