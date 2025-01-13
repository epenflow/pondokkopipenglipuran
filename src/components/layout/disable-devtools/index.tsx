'use client';
import React from 'react';
import { hasWindowObject, isFunction, isObject } from './helpers';

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		__REACT_DEVTOOLS_GLOBAL_HOOK__?: any;
	}
}

const DisableDevTools: React.FC<{ condition?: boolean }> = ({
	condition = process.env.NODE_ENV === 'production',
}) => {
	if (condition) {
		if (hasWindowObject()) {
			if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
				return null;
			}

			for (const key in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
				if (key === 'renderers') {
					window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = new Map();
					continue;
				}
				window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = isFunction(
					window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key],
				)
					? Function.prototype
					: null;
			}
		}
	}
	return null;
};

export default DisableDevTools;
