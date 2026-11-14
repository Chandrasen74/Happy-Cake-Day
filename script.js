/*
 * Copyright (c) 2026 Chandrasen. All rights reserved.
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use is prohibited.
 */

// * hint: try clicking/tapping the `How to?`
// * anchor located at the top-right corner
window.addEventListener('load', () => {
	new Camera()
		.setOptimalPerspective()
		.with({
			debug: true,
			rotate: {
				speed: 1.2
			}
		})
		.init()
})