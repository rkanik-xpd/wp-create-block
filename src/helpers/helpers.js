/**
 *
 * @param {[Object]} obj   Object to set the nested key
 * @param {[Array]} path  An array to describe the path(Ex: ['a.b.c'])
 * @param {[Object]} value Any value
 */
export const setDeep = (obj, path, value) => {
	path = typeof path === 'string' ? path.split('.') : path
	if (path.length === 1) {
		obj[path] = value
		return
	}
	return setDeep(obj[path[0]], path.slice(1), value)
}
