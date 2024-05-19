import { IconProps } from './';

export function ArrowLeftIcon({ size = 24, role, ...props }: IconProps) {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				{...props}
			>
				<path
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='m12 19l-7-7l7-7m7 7H5'
				></path>
			</svg>
			{role && <span className='sr-only'>{role}</span>}
		</>
	);
}
