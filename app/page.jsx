'use client';
import ButtonConvert from '@/components/ButtonConvert';
import FormAddRegex from '@/components/FormAddRegex';
import FormAddString from '@/components/FormAddString';
import { ArrowRightLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Badge } from '@/components/ui/badge';
export const valueChildren = { left: '', right: '' };
export const defaultValues = {
    start: '',
    regex: [valueChildren],
    string: '',
};
const Home = () => {
    const methods = useForm({
        defaultValues,
    });
    const searchParams = useSearchParams();
    const string = methods.getValues('string');
    const resultCheck = searchParams.get('result_check');
    console.log('🚀 ~ file: page.jsx:22 ~ Home ~ resultCheck:', resultCheck);
    return (
        <FormProvider {...methods}>
            <div className="grid grid-cols-12 mx-20 gap-5">
                <div className="col-span-5  rounded-lg min-h-[200px] flex flex-col gap-5 p-4 border-4 border-dashed">
                    <FormAddRegex />
                    <FormAddString />
                    <div>
                        <div
                            role="button"
                            className="px-3 py-2 rounded-lg bg-slate-300 text-center w-20 float-right"
                            onClick={() => methods.reset()}>
                            Clear
                        </div>
                    </div>
                </div>
                <div className="col-span-2 place-self-center  ">
                    <ButtonConvert />
                </div>

                <div className="col-span-5  rounded-lg">
                    <h1 className="font-medium">Kết quả:</h1>
                    {string && (
                        <div className="text-gray-500">
                            {resultCheck === 'true' ? (
                                <Badge className="bg-green-100 text-green-400">
                                    Chuỗi thuộc văn phạm chính quy
                                </Badge>
                            ) : (
                                <Badge className="bg-red-100 text-red-400">
                                    Chuỗi không thuộc văn phạm chính quy
                                </Badge>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </FormProvider>
    );
};

export default Home;
