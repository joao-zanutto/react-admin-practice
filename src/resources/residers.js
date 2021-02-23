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

const residersLabels = {
	name: 'Nome',
	alias: 'Apelido',
	phone: 'Telefone',
	city: 'Cidade',
};

export const ResidersList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick='edit'>
				<TextField
					autoComplete='off'
					source='name'
					label={residersLabels.name}
				/>
				<TextField
					autoComplete='off'
					source='alias'
					label={residersLabels.alias}
				/>
				<TextField
					autoComplete='off'
					source='phone'
					label={residersLabels.phone}
				/>
				<TextField
					autoComplete='off'
					source='city'
					label={residersLabels.city}
				/>
			</Datagrid>
		</List>
	);
};

export const ResidersEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput autoComplete='off' source='name' label={residersLabels.name} />
			<TextInput
				autoComplete='off'
				source='alias'
				label={residersLabels.alias}
			/>
			<TextInput
				autoComplete='off'
				source='phone'
				label={residersLabels.phone}
			/>
			<TextInput autoComplete='off' source='city' label={residersLabels.city} />
		</SimpleForm>
	</Edit>
);

export const ResidersCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput autoComplete='off' source='name' label={residersLabels.name} />
			<TextInput
				autoComplete='off'
				source='alias'
				label={residersLabels.alias}
			/>
			<TextInput
				autoComplete='off'
				source='phone'
				label={residersLabels.phone}
			/>
			<TextInput autoComplete='off' source='city' label={residersLabels.city} />
		</SimpleForm>
	</Create>
);
