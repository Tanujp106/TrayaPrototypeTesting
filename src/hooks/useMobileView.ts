import { useState, useEffect } from 'react';

export function useMobileView() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 450);
        };

        // Initial check
        checkMobile();

        // Listen for resize events
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}
