import { useState } from 'react'

export type GalleryProps = {
    weeks: ImageMetadata[][]
    current: number
}

export const Gallery = ({ weeks, current = 0 }: GalleryProps) => {
    const [currentWeek, setcurrentWeek] = useState(current)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
                <div className="text-xl font-semibold">Vecka:</div>
                <div className="join">
                    {weeks?.map((_: unknown, index: number) => (
                        <button
                            className={`join-item btn border-2 ${index === currentWeek ? 'btn-primary text-white' : ''}`}
                            onClick={() => setcurrentWeek(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {weeks[currentWeek].map((image: any, index: number) => (
                    <div>
                        <button
                            className="pointer-events-none w-full md:pointer-events-auto"
                            onClick={() => {
                                const modalTrigger = document?.getElementById(
                                    `modal_${index}`,
                                ) as HTMLDialogElement
                                modalTrigger.showModal()
                            }}
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
        </div>
    )
}
