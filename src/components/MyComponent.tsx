import React from 'react'

const MyComponent = ({ data }) => {
	if (!data) return null

	const a = ''

	return <div className="MyComponent">Ton nom : {data.name}</div>
}
export default MyComponent
