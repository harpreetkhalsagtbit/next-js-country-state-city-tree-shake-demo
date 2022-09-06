import { useEffect, useState } from 'react';

export default function useResourceAPI(list) {
	const [resourceSize, setResourceSize] = useState([]);

	useEffect(() => {
		const resources = performance.getEntriesByType("resource");
		const listData = [];
		for (let i=0; i < resources.length; i++) {
			if ("transferSize" in resources[i] && resources[i].initiatorType === 'script') {
				const fileName = resources[i].name.split('/').pop();
				const fileSize = `${parseFloat(resources[i].transferSize / 1024).toFixed(2)} kB`;
				listData.push({
					fileName, fileSize
				})
			}
		}
		if (!resourceSize.length) {
			setResourceSize([...resourceSize, ...listData]);
		}
	}, [list, resourceSize])

	return resourceSize;
}