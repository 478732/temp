export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}) {
    return <div className="absolute inset-0 h-full w-full bg-black">MODAL SHOWING</div>
}
