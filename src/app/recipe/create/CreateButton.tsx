"use client";

import { useFormStatus } from "react-dom";

function CreateButton() {
    const { pending } = useFormStatus();

    return (
        <button
            className="mt-4 p-2 rounded-md bg-white/10 border-white/50 border-2 disabled:text-white/70"
            type="submit"
            disabled={pending}
        >
            Create
        </button>
    );
}

export default CreateButton;
