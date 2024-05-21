import React from 'react';
import Link from 'next/link';
import { ROUTE_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ShareIcon } from '@/components/icons';

export default async function PreviewLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex min-h-svh flex-col'>
			<header className='bg-card flex h-16 items-center justify-between border-b px-4 md:m-4 md:rounded-xl md:border'>
				<Link href={ROUTE_LINKS} className='flex items-center gap-1 text-sm font-semibold'>
					<ArrowLeftIcon size={16} /> Back to Editor
				</Link>
				<Button>
					<ShareIcon size={16} />
					Share Link
				</Button>
			</header>
			{children}
		</div>
	);
}