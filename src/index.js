
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


import './assets/scss/style.scss';


import edit from './editor/editor';
import save from './save/save';


registerBlockType('create-block/card-block-task', {
	edit, save,
	title: __('Card Block Task', 'card-block-task'),
	attributes: {
		card: {
			type: 'object',
			default: {
				style: {
					backgroundColor: '#009688',
					height: 'auto',
					width: 'auto',
					boxShadow: '0 7px 20px rgba(0, 0, 0, 0.05)',
					borderRadius: '0.5rem',
				},
				title: {
					text: 'Xpeed Studio',
					style: {
						color: 'white'
					}
				},
				subtitle: {
					text: 'Niche WordPress Themes & Plugins',
					style: {
						color: '#f5f5f5'
					}
				},
				content: {
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, nesciunt architecto. Delectus officia quae distinctio adipisci culpa, quasi tempora neque eius facere eveniet quibusdam magni in sunt suscipit expedita aliquid!',
					style: {
						color: '#e0e0e0'
					}
				}
			}
		},
		cardWidth: {
			type: 'string'
		},
		cardHeight: {
			type: 'string'
		},
		cardBackground: {
			type: 'string',
			default: '#009688'
		},
		cardShadow: {
			type: 'string'
		},
		cardTitleColor: {
			type: 'string',
			default: 'white'
		}
	},
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'card-block-task'
	),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		html: false,
	}
});
