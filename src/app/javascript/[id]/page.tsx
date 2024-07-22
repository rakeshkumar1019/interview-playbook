export default function JavascriptTopics({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Topic: {params.id}</h1>
        </div>
    )
}