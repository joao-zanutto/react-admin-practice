import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	SimpleForm,
	Edit,
	TextInput,
	Create,
} from 'react-admin';

const clientLabels = {
	name: 'Nome',
	cpf: 'CPF',
	city: 'Cidade',
};

export const ClientsList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick='edit'>
				<TextField autoComplete='off' source='name' label={clientLabels.name} />
				<TextField autoComplete='off' source='cpf' label={clientLabels.cpf} />
				<TextField autoComplete='off' source='city' label={clientLabels.city} />
			</Datagrid>
		</List>
	);
};

export const ClientsEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput autoComplete='off' source='name' label={clientLabels.name} />
			<TextInput autoComplete='off' source='cpf' label={clientLabels.cpf} />
			<TextInput autoComplete='off' source='city' label={clientLabels.city} />
		</SimpleForm>
	</Edit>
);

export const ClientsCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput autoComplete='off' source='name' label={clientLabels.name} />
			<TextInput autoComplete='off' source='cpf' label={clientLabels.cpf} />
			<TextInput autoComplete='off' source='city' label={clientLabels.city} />
		</SimpleForm>
	</Create>
);
