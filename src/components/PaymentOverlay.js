import React, { useEffect, useState } from 'react';

const PaymentOverlay = ({ dueDate }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const calculateOpacity = () => {
            const currentDate = new Date();
            const paymentDueDate = new Date(dueDate);
            const daysSinceDueDate = Math.floor((currentDate - paymentDueDate) / (1000 * 60 * 60 * 24));
            return Math.min(daysSinceDueDate / 90, 1);
        };

        setOpacity(calculateOpacity());
    }, [dueDate]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                zIndex: 9999,
                pointerEvents: 'none',
            }}
        />
    );
};

export default PaymentOverlay;