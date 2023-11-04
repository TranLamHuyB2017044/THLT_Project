'use client';
import { defaultValues, valueChildren } from '@/app/page';
import { PlusCircle } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';

const FormAddRegex = () => {
    const { register, control, handleSubmit, reset, watch, resetField } =
        useFormContext();
    const { fields, append, prepend, remove, swap, move, insert, replace } =
        useFieldArray({
            control,
            name: 'regex',
        });
    return (
        <form className="flex flex-col gap-3">
            <div className="flex justify-between">
                <h1 className="font-medium">Thêm quy luật sinh</h1>
                <section className="flex gap-1 ring-1 ring-sky-50 rounded-lg">
                    <button
                        type="button"
                        className="rounded-full bg-sky-50 p-1 hover:bg-sky-100"
                        onClick={() => {
                            append(valueChildren);
                        }}>
                        <PlusCircle />
                    </button>

                    <button
                        type="button"
                        className="rounded-full bg-sky-50 p-1 hover:bg-sky-100"
                        onClick={() => {
                            resetField('regex', {
                                defaultValue: [],
                            });
                        }}>
                        <RotateCcw />
                    </button>
                </section>
            </div>
            <ul className="flex flex-col gap-2">
                {fields.map((item, index) => (
                    <li key={index} className="flex gap-3 items-center">
                        <input
                            {...register(`regex.${index}.left`)}
                            className="ring-1 rounded-md px-2 py-1 "
                        />
                        <MoveRight />
                        <input
                            {...register(`regex.${index}.right`)}
                            className="ring-1 rounded-md px-2 py-1 "
                        />
                        <button
                            type="button"
                            className="rounded-full bg-sky-50 p-1 hover:bg-sky-100"
                            onClick={() => {
                                remove(index);
                            }}>
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default FormAddRegex;
