export default function ReactTopics({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Topic: {params.id}</h1>
        </div>
    )
}