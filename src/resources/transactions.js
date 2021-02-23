import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	ReferenceField,
	Edit,
	SimpleForm,
	ReferenceInput,
	SelectInput,
	TextInput,
	Create,
} from 'react-admin';

const transactionsLabels = {
	name: 'Responsável',
	title: 'Título da Transação',
	totalValue: 'Valor',
	category: 'Categoria',
	type: 'Tipo',
};

export const TransactionsList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick='edit'>
				<TextField source='title' label={transactionsLabels.title} />
				<ReferenceField
					source='residerId'
					reference='residers'
					label={transactionsLabels.name}>
					<TextField source='alias' />
				</ReferenceField>
				<TextField source='totalValue' label={transactionsLabels.totalValue} />
				<ReferenceField
					source='categoryId'
					reference='categories'
					label={transactionsLabels.category}>
					<TextField source='cat' />
				</ReferenceField>
				<ReferenceField
					source='categoryId'
					reference='categories'
					label={transactionsLabels.type}>
					<TextField source='type' />
				</ReferenceField>
			</Datagrid>
		</List>
	);
};

export const TransactionsEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput
				autoComplete='off'
				source='title'
				label={transactionsLabels.title}
			/>
			<ReferenceInput
				source='residerId'
				reference='residers'
				label={transactionsLabels.name}>
				<SelectInput source='alias' />
			</ReferenceInput>
			<TextInput source='totalValue' label={transactionsLabels.totalValue} />
			<ReferenceInput
				source='categoryId'
				reference='categories'
				label={transactionsLabels.category}>
				<SelectInput source='cat' />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);

export const TransactionsCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput
				autoComplete='off'
				source='title'
				label={transactionsLabels.title}
			/>
			<ReferenceInput
				source='residerId'
				reference='residers'
				label={transactionsLabels.name}>
				<SelectInput source='alias' />
			</ReferenceInput>
			<TextInput source='totalValue' label={transactionsLabels.totalValue} />
			<ReferenceInput
				source='categoryId'
				reference='categories'
				label={transactionsLabels.category}>
				<SelectInput source='cat' />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
