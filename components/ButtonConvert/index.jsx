'use client';
import { ArrowRightLeft } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
const ButtonConvert = () => {
    const { getValues } = useFormContext();
    const handleConvert = () => {
        const regex = getValues('regex');
        console.log('🚀 ~ file: index.jsx:6 ~ ButtonConvert ~ regex:', regex);
        const string = getValues('string');
        console.log('🚀 ~ file: index.jsx:8 ~ ButtonConvert ~ string:', string);
    };
    return (
        <div>
            <div
                role="button"
                className="flex flex-col bg-green-100 px-2 py-1 rounded-lg w-fit justify-center items-center"
                onClick={handleConvert}>
                <ArrowRightLeft />
                <span>Chuyển đổi</span>
            </div>
        </div>
    );
};

export default ButtonConvert;
