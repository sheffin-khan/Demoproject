"use client"; 

import { useState } from "react";

const CaptureScreenshot = () => {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const captureScreenshot = async () => {
        setLoading(true);
        const response = await fetch("/api/capture");
        const data = await response.json();
        
        if (data.success) {
            setScreenshot(data.screenshot);
        }
        setLoading(false);
    };

    return (
        <div className="p-4">
            <button onClick={captureScreenshot} className="bg-blue-500 text-white p-2 rounded">
                Capture Screenshot
            </button>

            {loading && <p>Taking Screenshot...</p>}

            {screenshot && (
                <div>
                    <h3>Screenshot:</h3>
                    <img src={screenshot} alt="Captured Screenshot" className="mt-2 w-96" />
                </div>
            )}
        </div>
    );
};

export default CaptureScreenshot;