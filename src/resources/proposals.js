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

const clientLabels = {
	name: 'Cliente',
	title: 'Título do Projeto',
	totalValue: 'Valor Final',
};

export const ProposalsList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick='edit'>
				<TextField source='title' label={clientLabels.title} />
				<ReferenceField
					source='clientId'
					reference='clients'
					label={clientLabels.name}>
					<TextField source='name' />
				</ReferenceField>
				<TextField source='totalValue' label={clientLabels.totalValue} />
			</Datagrid>
		</List>
	);
};

export const ProposalsEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput autoComplete='off' source='title' label={clientLabels.title} />
			<ReferenceInput
				source='clientId'
				reference='clients'
				label={clientLabels.name}>
				<SelectInput source='name' />
			</ReferenceInput>
			<TextInput source='totalValue' label={clientLabels.totalValue} />
		</SimpleForm>
	</Edit>
);

export const ProposalsCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput autoComplete='off' source='title' label={clientLabels.title} />
			<ReferenceInput
				source='clientId'
				reference='clients'
				label={clientLabels.name}>
				<SelectInput source='name' />
			</ReferenceInput>
			<TextInput source='totalValue' label={clientLabels.totalValue} />
		</SimpleForm>
	</Create>
);
