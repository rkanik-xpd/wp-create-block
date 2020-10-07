import { __ } from '@wordpress/i18n';
export default function save({ attributes: { card } }) {

	// Destructuring props
	const { style, title, subtitle, content } = card

	return (
		<div className='card-block' style={{ ...style }}>
			<h3 className='card-block__title' style={{ ...title.style }}>{title.text}</h3>
			<p className='card-block__subtitle' style={{ ...subtitle.style }}>{subtitle.text}</p>
			<div className='card-block__content' style={{ ...content.style }}>
				<p className='card-block__text'>{content.text}</p>
			</div>
		</div>
	);
}
