import clsx from "clsx";

export function Photos(images){
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
    
    return (
        <div className="mt-16 sm:mt-20">
            {images.map((image, index) => (
                <div
                key={image.src}
                className={clsx(
                    'relative aspect-[9/10] w-44 flex-none overflow-overlay rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl' 
                )}
                >
                    <Image
                    src={image}
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            ))}
        </div>
    )
}
    
