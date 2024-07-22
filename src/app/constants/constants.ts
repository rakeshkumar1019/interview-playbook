import { Topic } from "../types/types"
export const topicsList:Topic[] = [
    {
        id:1,
        title: 'React',
        url: '/react',
        showSubTopic: true,
        subTopic: [
            {
                id: 1,
                title: 'useState',
                url: '/react/usestate',
            },
            {
                id: 2,
                title: 'useEffect',
                url: '/react/useeffect',
            }
        ]
    },
    {
        id: 2,
        title: 'Javascript',
        url: '/javascript',
        showSubTopic: true,
        subTopic: [
            {
                id: 1,
                title: 'Let Var & Const',
                url: '/javascript/let-var-const',
            },
            {
                id: 2,
                title: 'Arrow Function',
                url: '/javascript/arrow-function',
            }
        ]
    },
    
]

