import { ExtendedElement } from 'utils/interfaces';


const minProductCardWidth = 240 // min-width of grid column + grid gap from CSS


export function calculateAmount(): number {
	const container: ExtendedElement | null = document.querySelector('.container')
	if (container) return Math.max(Math.floor(container.offsetWidth / minProductCardWidth), 2) * 2
	else return 8
}
