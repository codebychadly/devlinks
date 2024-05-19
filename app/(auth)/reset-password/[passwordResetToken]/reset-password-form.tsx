'use client';

import { useForm } from 'react-hook-form';
import { resetPasswordFormSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormInput,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';

type TResetPasswordForm = z.infer<typeof resetPasswordFormSchema>;

export default function ResetPasswordForm() {
	const form = useForm<TResetPasswordForm>({
		resolver: zodResolver(resetPasswordFormSchema),
		defaultValues: {
			password: '',
			confirmPassword: ''
		}
	});

	const {
		formState: { isSubmitting, isDirty }
	} = form;

	const params = useParams();
	const passwordResetToken = params.passwordResetToken as string;

	const onSubmit = async (values: TResetPasswordForm) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<FormInput
									type='password'
									placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<FormInput
									type='password'
									placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button disabled={isSubmitting || !isDirty}>Submit</Button>
			</form>
		</Form>
	);
}
