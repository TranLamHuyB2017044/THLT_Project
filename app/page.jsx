'use client';
import ButtonConvert from '@/components/ButtonConvert';
import FormAddRegex from '@/components/FormAddRegex';
import FormAddString from '@/components/FormAddString';
import { ArrowRightLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Badge } from '@/components/ui/badge';
import { Smile } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Frown } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
export const valueChildren = { left: '', right: '' };
export const defaultValues = {
    start: '',
    regex: [valueChildren],
    string: '',
};
const Home = () => {
    const router = useRouter();
    const methods = useForm({
        defaultValues,
    });
    const searchParams = useSearchParams();
    const string = methods.getValues('string');
    const resultCheck = searchParams.get('result_check');
    const handleClear = () => {
        methods.reset();
        router.replace('/');
    };
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
                            onClick={() => handleClear()}>
                            Clear
                        </div>
                    </div>
                </div>
                <div className="col-span-2 place-self-center  ">
                    <ButtonConvert />
                </div>

                <div className="col-span-5  rounded-lg ring-1 overflow-hidden h-full">
                    <h1 className="font-medium text-xl text-center bg-pink-100 py-1 rounded-md">
                        Kết quả
                    </h1>
                    {string ? (
                        <div className="h-full flex justify-center items-center ">
                            {resultCheck === 'true' ? (
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <Smile className="w-40 h-40 stroke-green-300" />
                                    </div>
                                    <Badge className="bg-green-100 text-green-400 text-2xl">
                                        Chuỗi được sinh ra từ văn phạm
                                    </Badge>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <Frown className="w-40 h-40 stroke-red-300" />
                                    </div>
                                    <Badge className="bg-red-100 text-red-400 text-2xl">
                                        Chuỗi không được sinh ra từ văn phạm
                                    </Badge>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center">
                                <PackageSearch className="w-40 h-40 stroke-sky-300" />
                            </div>
                            <Badge className="bg-sky-100 text-sky-400 text-2xl">
                                Chưa có dữ liệu. Hãy nhập vào form.
                            </Badge>
                        </div>
                    )}
                </div>
            </div>
        </FormProvider>
    );
};

export default Home;
