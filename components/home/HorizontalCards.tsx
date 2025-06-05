import data from "../../data.json"
export default function HorizontalCards() {

    const Data = data.Clients

    return (
        <>
            <div className="w-full overflow-x-scroll my-16 z-5" style={{ scrollbarWidth: "none" }}>
                <div className="flex gap-4 p-4 w-max">
                    {Data.map((v, i) => (
                        <img key={i} src={v.image} className="h-auto rounded-4xl w-[600] md:w-[700] p-4 bg-white" alt="" />
                    ))}
                </div>
            </div>
        </>
    )
}