class ProductManager {
	constructor() {
		this.products = []
	}

	addProduct(title, description, price, thumbnail, code, stock) {

		const codeExistente = this.products.find((product) => product.code === code)

		const product = {
			id: !this.products.length ? 1 : this.products[this.products.length - 1].id + 1,
			title,
			description,
			price,
			thumbnail,
			code: !codeExistente ? code : 'CODIGO INGRESADO EXISTENTE',
			stock
		}

		!title || !description || !price || !thumbnail || !code || !stock ?
			this.products = 'COMPLETE TODOS LOS CAMPOS REQUERIDOS' :
			this.products.push(product)
	}

	getProducts() {
		return this.products
	}

	getProductById(id) {
		const product = this.products.find((product) => product.id === id)
		return !product ? 'ERROR: Not Found' : product
	}
}