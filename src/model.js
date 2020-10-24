import image     from './assets/image.jpg';
import { TextBlock, ColumnsBlock, ImageBlock, TitleBlock } from './classes/blocks';

export const model = [
	new TitleBlock(
		'Конструктор сайтов',
		{
			tag: 'h2',
			styles: {
				background: 'linear-gradient(to right, #ff0099, #493240)',
				color: '#fff',
				padding: '1.5rem',
				'text-align': 'center'
			}
		}
	),
	new ImageBlock(
		image,
		{
			styles: {
				padding: '2rem 0',
				display: 'flex',
				'justify-content': 'center'
			},
			imageStyles: {
				width: '100%',
				'max-width': '700px',
				height: 'auto'
			},
			alt: 'image'
		}
	),
	new ColumnsBlock(
		[
			'Блок 1',
			'Блок 2',
			'Блок 3'
		],
		{
			styles: {
				background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold'
			}
		}
	),
	new TextBlock(
		'Текст на всю ширину',
		{
			styles: {
				background: 'linear-gradient(to left, #f2994a, #f2c94c)',
				padding: '1rem',
				'font-weight': 'bold'
			}
		}
	)
];