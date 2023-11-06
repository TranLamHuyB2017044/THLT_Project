'use client';
import { ArrowRightLeft } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import {
    checkGrammar,
    clear,
    filterLowercase,
    generateStrings,
} from '../../utils/regex';
import { route } from 'nextjs-routes';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ScanBarcode } from 'lucide-react';
import { useGrammar } from '../store';

const ButtonConvert = () => {
    const pathName = usePathname();
    const router = useRouter();
    const { setResultCheck, setGrammarShape, setStringSets } = useGrammar();
    const { getValues } = useFormContext();
    const handleConvert = () => {
        const regex = getValues('regex');
        const string = getValues('string');
        const start = getValues('start');
        const grammar = clear(regex);
        console.log(
            '🚀 ~ file: index.jsx:21 ~ handleConvert ~ grammar:',
            grammar,
        );

        if (!start) return toast.error('Vui lòng nhập chuỗi bắt đầu');
        if (!Object.keys(grammar).length)
            return toast.error('Vui lòng nhập quy luật sinh');
        if (!string) return toast.error('Vui lòng nhập chuỗi kiểm tra');
        const result = checkGrammar(grammar, start, string);
        console.log(
            '🚀 ~ file: index.jsx:27 ~ handleConvert ~ result:',
            result,
        );

        const V = Object.keys(grammar).map((k) => k);
        const P = [];
        for (const [key, value] of Object.entries(grammar)) {
            const str = `${key} -> ${value.join(' | ')}`;
            P.push(str);
        }
        const grammarShape = {
            V,
            T: filterLowercase(grammar),
            P,
            S: start,
        };
        setGrammarShape(grammarShape);

        setResultCheck(result);
        // const stringSets = generateStrings(grammar, start, 0);
        // console.log(
        //     '🚀 ~ file: index.jsx:57 ~ handleConvert ~ stringSets:',
        //     stringSets,
        // );
    };
    return (
        <div>
            <div
                role="button"
                className="flex flex-col bg-green-100 hover:bg-green-200 transition-full duration-150 ease-in-out px-4 py-3 rounded-full  w-fit justify-center items-center"
                onClick={handleConvert}>
                <ScanBarcode />
                <span>Kiểm tra</span>
            </div>
        </div>
    );
};

export default ButtonConvert;
