import { animate, animateChild, group, query, state, style, transition, trigger, } from "@angular/animations";

// Routable animations
export const slideInAnimation = trigger(
	"routeAnimation",
	[
		transition("1 <=> 2", [
			style({ position: "relative" }),
			query(":enter, :leave", [
				style(
					{
						position: 'absolute',
						top     : 0,
						left    : 0,
						width   : '100%'
					}),
			], { optional: true }),
			query(':enter', [
				style({ left: '-100%' })
			]),
			query(':leave', animateChild()),
			group(
				[
					query(':leave', [
						animate('300ms ease-out', style({ left: '100%' }))
					]),
					query(':enter', [
						animate('300ms ease-out', style({ left: '0%' }))
					])
				]),
			query(':enter', animateChild()),
		]),
		transition('* <=> *', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style(
					{
						position: 'absolute',
						top     : 0,
						left    : 0,
						width   : '100%'
					})
			]),
			query(':enter', [
				style({ left: '-100%' })
			]),
			query(':leave', animateChild()),
			group(
				[
					query(':leave', [
						animate('2200ms ease-out', style({ left: '100%' }))
					]),
					query(':enter', [
						animate('2300ms ease-out', style({ left: '0%' }))
					])
				]),
			query(':enter', animateChild()),
		])
	]
);

export const InputSlide = [
	trigger('disableOrNot', [
		state('enable', style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
		state('disabled', style({ height: '100px', opacity: 0.5, backgroundColor: 'red' })),
		transition('enable => disabled', animate('1s')),
		transition('disabled => enable', animate('1s'))
	]),
	trigger('inputP', [
		state('hast', style({ width: '100%' })),
		state('nist', style({ width: '80%' })),
		transition('hast <=> nist', animate('0.2s')),
		// transition('nist => hast', animate('0.2s'))
	]),
];