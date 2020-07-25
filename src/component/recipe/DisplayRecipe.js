import React from 'react';

const DisplayRecipe = ({ recipe: { label, calories, image, cautions, dietLabels } }) => {
	return (
		<div className="col-md-4 col-sm-12 recipe-container">
			<div className='recipe-info'>
				<h4 className='heading-tertiary'>{label}</h4>
				<img src={image} alt="image_image" className="recipe-img" />
				<p><b>Calories: </b> {calories}</p>
				{
					cautions.length > 0 &&
					<p><b>Caution: </b>
						{
							cautions.map(caution => {
								return <span key={caution}>{caution} {", "}</span>
							})
						}
					</p>
				}
			</div>
		</div>
	)
}
export default DisplayRecipe;