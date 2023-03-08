export interface AttributeValue {
	name: string;
	value: number;
}

export interface CategoryAttributesValue {
	name: string;
	values: AttributeValue[];
}

export interface CategoryManufacturer {
	id: number;
	name: string;
}
