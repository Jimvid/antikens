import { useState } from 'react'

export const Gallery = (props: { weeks: ImageMetadata[][] }) => {
    const [currentWeek, setcurrentWeek] = useState(0)

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {props.weeks[currentWeek].map((image: any, index: number) => (
                    <div>
                        <button
                            className="pointer-events-none w-full md:pointer-events-auto"
                            onClick={() =>
                                document
                                    ?.getElementById('modal_' + index)
                                    ?.showModal()!
                            }
                        >
                            <img
                                className="w-full cursor-pointer rounded-md shadow-lg md:aspect-[16/12] object-cover transition-all hover:shadow-2xl hover:translate-y-[-6px]"
                                src={image.src}
                                alt=""
                            />
                        </button>
                        <dialog id={`modal_${index}`} className="modal">
                            <div className="modal-box min-w-[45vw] overflow-hidden rounded-md border-2 border-black p-0 relative">
                                <form
                                    method="dialog"
                                    className="absolute top-3 right-3"
                                >
                                    <button className="text-xl bg-black text-white shadow-2xl rounded-full w-8 h-8 flex justify-center items-center transition-all hover:scale-105">
                                        <i className="ph ph-x" />
                                    </button>
                                </form>
                                <img
                                    className="cursor-pointer shadow-lg min-w-full object-cover"
                                    src={image.src}
                                    alt=""
                                />
                            </div>
                        </dialog>
                    </div>
                ))}
            </div>
            <div className="m-auto flex gap-4 items-center">
                <span className="text-xl font-semibold">Vecka:</span>
                <div className="join m-auto">
                    {props?.weeks?.map((_: unknown, index: number) => (
                        <button
                            className={`join-item btn ${index === currentWeek ? 'btn-active' : ''}`}
                            onClick={() => setcurrentWeek(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
