import { __ } from '@wordpress/i18n';
import { setDeep } from '../helpers/helpers'
const { useState } = wp.element

// Components
const { InspectorControls } = wp.blockEditor
const {
	Panel,
	PanelBody,
	PanelRow,
	ColorPalette,
	RangeControl
} = wp.components

// Styles
import './editor.scss';

const Editor = ({
	attributes: { card },
	setAttributes
}) => {

	// States
	const [colors] = useState([
		{ name: 'red', color: '#f44336' },
		{ name: 'purple', color: '#673ab7' },
		{ name: 'teal', color: '#009688' },
		{ name: 'green', color: '#4caf50' },
	])

	// Destructuring props
	const { style, title, subtitle, content } = card
	const { backgroundColor, height, width } = style

	// Methods
	const setCard = ({ path, value }) => {
		let newCard = { ...card }
		setDeep(newCard, path, value)
		setAttributes({ card: newCard })
	}

	const handleChangeColor = color => {
		setCard({
			value: color,
			path: 'style.backgroundColor'
		})
	}

	const handleChangeSize = ({ name, value }) => {
		setCard({
			value,
			path: `style.${name}`
		})
	}

	return (
		<>
			{/* Start Sidebar controls */}
			<InspectorControls>
				<Panel header="Card Block">
					<PanelBody title="Card Block Settings" initialOpen={true}>
						<PanelRow>
							<ColorPalette
								colors={colors}
								value={backgroundColor}
								onChange={handleChangeColor}
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Card Width" value={width} min={256} max={1080}
								onChange={value => handleChangeSize({ name: 'width', value })}
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Card Height" value={height} min={256} max={720}
								onChange={value => handleChangeSize({ name: 'height', value })}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			{/* End Sidebar controls */}

			{/* Start Card */}
			<div className='card-block' style={{ ...style }}>
				<h3 className='card-block__title' style={{ ...title.style }}>{title.text}</h3>
				<p className='card-block__subtitle' style={{ ...subtitle.style }}>{subtitle.text}</p>
				<div className='card-block__content' style={{ ...content.style }}>
					<p className='card-block__text'>{content.text}</p>
				</div>
			</div>
			{/* End Card */}
		</>
	);
}

export default Editor
