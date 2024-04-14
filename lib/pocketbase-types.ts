/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Customers = "customers",
	Events = "events",
	GalerieProducts = "galerie_products",
	GalerieProductsCategories = "galerie_products_categories",
	InventoryProductCategories = "inventory_product_categories",
	InventoryQuantityProducts = "inventory_quantity_products",
	InventoryUniqueProducts = "inventory_unique_products",
	Invoices = "invoices",
	PaymentMethods = "payment_methods",
	QuantityProductSales = "quantity_product_sales",
	Sizes = "sizes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CustomersRecord = {
	addressCity: string
	addressCountry: string
	addressStreet: string
	email: string
	firstName: string
	lastName: string
	phoneNumber?: number
	user: RecordIdString
	zipCode: string
}

export type EventsRecord = {
	city?: string
	dateAddition?: string
	endDate: IsoDateString
	endTime: number
	eventLocation?: string
	image?: string[]
	nameLong: string
	nameShort: string
	startDate: IsoDateString
	startTime: number
	user: RecordIdString
	zipCode?: number
}

export type GalerieProductsRecord = {
	category?: RecordIdString
	description?: string
	image?: string[]
	name?: string
	price?: number
	size?: RecordIdString
}

export type GalerieProductsCategoriesRecord = {
	name?: string
}

export type InventoryProductCategoriesRecord = {
	image?: string
	name?: string
	user?: RecordIdString
}

export type InventoryQuantityProductsRecord = {
	category?: RecordIdString
	image?: string
	name?: string
	price: number
	quantity?: number
	size?: RecordIdString
	user?: RecordIdString
}

export type InventoryUniqueProductsRecord = {
	category?: RecordIdString
	description?: string
	image?: string[]
	invoice?: RecordIdString
	name?: string
	price?: number
	showInGalerie?: boolean
	size?: RecordIdString
	user?: RecordIdString
}

export type InvoicesRecord = {
	customer: RecordIdString
	discount?: number
	invoiceNumber: string
	paid?: boolean
	paymentMethod: RecordIdString
	user: RecordIdString
}

export type PaymentMethodsRecord = {
	name: string
}

export type QuantityProductSalesRecord = {
	amount: number
	invoice: RecordIdString
	quantityProduct: RecordIdString
	user: RecordIdString
}

export type SizesRecord = {
	height?: number
	user?: RecordIdString
	width?: number
}

export type UsersRecord = {
	activated_payment_methods?: RecordIdString[]
	avatar?: string
	name: string
}

// Response types include system fields and match responses from the PocketBase API
export type CustomersResponse<Texpand = unknown> = Required<CustomersRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type GalerieProductsResponse<Texpand = unknown> = Required<GalerieProductsRecord> & BaseSystemFields<Texpand>
export type GalerieProductsCategoriesResponse<Texpand = unknown> = Required<GalerieProductsCategoriesRecord> & BaseSystemFields<Texpand>
export type InventoryProductCategoriesResponse<Texpand = unknown> = Required<InventoryProductCategoriesRecord> & BaseSystemFields<Texpand>
export type InventoryQuantityProductsResponse<Texpand = unknown> = Required<InventoryQuantityProductsRecord> & BaseSystemFields<Texpand>
export type InventoryUniqueProductsResponse<Texpand = unknown> = Required<InventoryUniqueProductsRecord> & BaseSystemFields<Texpand>
export type InvoicesResponse<Texpand = unknown> = Required<InvoicesRecord> & BaseSystemFields<Texpand>
export type PaymentMethodsResponse<Texpand = unknown> = Required<PaymentMethodsRecord> & BaseSystemFields<Texpand>
export type QuantityProductSalesResponse<Texpand = unknown> = Required<QuantityProductSalesRecord> & BaseSystemFields<Texpand>
export type SizesResponse<Texpand = unknown> = Required<SizesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	customers: CustomersRecord
	events: EventsRecord
	galerie_products: GalerieProductsRecord
	galerie_products_categories: GalerieProductsCategoriesRecord
	inventory_product_categories: InventoryProductCategoriesRecord
	inventory_quantity_products: InventoryQuantityProductsRecord
	inventory_unique_products: InventoryUniqueProductsRecord
	invoices: InvoicesRecord
	payment_methods: PaymentMethodsRecord
	quantity_product_sales: QuantityProductSalesRecord
	sizes: SizesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	customers: CustomersResponse
	events: EventsResponse
	galerie_products: GalerieProductsResponse
	galerie_products_categories: GalerieProductsCategoriesResponse
	inventory_product_categories: InventoryProductCategoriesResponse
	inventory_quantity_products: InventoryQuantityProductsResponse
	inventory_unique_products: InventoryUniqueProductsResponse
	invoices: InvoicesResponse
	payment_methods: PaymentMethodsResponse
	quantity_product_sales: QuantityProductSalesResponse
	sizes: SizesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'customers'): RecordService<CustomersResponse>
	collection(idOrName: 'events'): RecordService<EventsResponse>
	collection(idOrName: 'galerie_products'): RecordService<GalerieProductsResponse>
	collection(idOrName: 'galerie_products_categories'): RecordService<GalerieProductsCategoriesResponse>
	collection(idOrName: 'inventory_product_categories'): RecordService<InventoryProductCategoriesResponse>
	collection(idOrName: 'inventory_quantity_products'): RecordService<InventoryQuantityProductsResponse>
	collection(idOrName: 'inventory_unique_products'): RecordService<InventoryUniqueProductsResponse>
	collection(idOrName: 'invoices'): RecordService<InvoicesResponse>
	collection(idOrName: 'payment_methods'): RecordService<PaymentMethodsResponse>
	collection(idOrName: 'quantity_product_sales'): RecordService<QuantityProductSalesResponse>
	collection(idOrName: 'sizes'): RecordService<SizesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
