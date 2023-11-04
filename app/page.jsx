'use client';
import ButtonConvert from '@/components/ButtonConvert';
import FormAddRegex from '@/components/FormAddRegex';
import FormAddString from '@/components/FormAddString';
import { ArrowRightLeft } from 'lucide-react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const valueChildren = { left: '', right: '' };
export const defaultValues = {
    regex: [valueChildren],
    string: '',
};
const Home = () => {
    const methods = useForm({
        defaultValues,
    });

    return (
        <FormProvider {...methods}>
            <div className="grid grid-cols-12 mx-20 gap-5">
                <div className="col-span-5  rounded-lg min-h-[200px] flex flex-col gap-5 ">
                    <FormAddRegex />
                    <FormAddString />
                </div>
                <div className="col-span-2 place-self-center">
                    <ButtonConvert />
                </div>
                <div className="col-span-5 bg-fuchsia-50 rounded-lg"></div>
            </div>
        </FormProvider>
    );
};

export default Home;
