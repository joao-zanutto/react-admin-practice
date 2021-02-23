router.render = (req, res) => {
	// if it's a GET request and result is an Array
	if (req.method === 'GET' && Array.isArray(res.locals.data)) {
		res.json({
			total: res.get('X-Total-Count'),
			list: res.locals.data,
		});
	}
};
