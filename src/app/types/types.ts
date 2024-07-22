export type Topic = {
    id: number;
    title: string;
    url: string;
    showSubTopic: boolean;
    subTopic: {
        id: number;
        title: string;
        url: string;
    }[];
} | undefined