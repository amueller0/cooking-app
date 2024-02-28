function DesktopNotSupported() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">Not supported!</p>
            <p className="text-2xl mt-4">Please use a mobile device.</p>
        </div>
    );
}

export default DesktopNotSupported;
