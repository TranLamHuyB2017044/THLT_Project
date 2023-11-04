'use client';
import { ArrowRightLeft } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { checkGrammar, clear } from '../../utils/regex';
import { route } from 'nextjs-routes';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const ButtonConvert = () => {
    const pathName = usePathname();
    const router = useRouter();
    const { getValues } = useFormContext();
    const handleConvert = () => {
        const regex = getValues('regex');
        const string = getValues('string');
        const start = getValues('start');
        const grammar = clear(regex);
        console.log(
            '🚀 ~ file: index.jsx:18 ~ handleConvert ~ grammar:',
            grammar,
        );
        const result = checkGrammar(grammar, start, string);

        if (!start) return toast.error('Vui lòng nhập chuỗi bắt đầu');
        if (!Object.keys(grammar).length)
            return toast.error('Vui lòng nhập quy luật sinh');
        if (!string) return toast.error('Vui lòng nhập chuỗi kiểm tra');

        const newRoute = route({
            pathname: pathName,
            query: { result_check: result },
        });
        router.replace(newRoute);
    };
    return (
        <div>
            <div
                role="button"
                className="flex flex-col bg-green-100 hover:bg-green-200 transition-full duration-150 ease-in-out px-4 py-3 rounded-full  w-fit justify-center items-center"
                onClick={handleConvert}>
                <ArrowRightLeft />
                <span>Chuyển đổi</span>
            </div>
        </div>
    );
};

export default ButtonConvert;
