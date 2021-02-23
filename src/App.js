import { Admin, Resource, ListGuesser } from 'react-admin';
import {
	ResidersCreate,
	ResidersEdit,
	ResidersList,
} from './resources/residers';

import {
	TransactionsList,
	TransactionsEdit,
	TransactionsCreate,
} from './resources/transactions';

import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
	'pt-br': ptBrMessages,
};
const i18nProvider = polyglotI18nProvider(
	(locale) => messages[locale],
	'pt-br'
);

const dataProvider = jsonServerProvider('http://localhost:3001');
function App() {
	return (
		<Admin
			i18nProvider={i18nProvider}
			dataProvider={dataProvider}
			title='República 7 Eh Poko'>
			<Resource
				icon={LibraryBooksIcon}
				name='transactions'
				list={TransactionsList}
				edit={TransactionsEdit}
				create={TransactionsCreate}
				options={{ label: 'Transações' }}
				title='Transações'
			/>
			<Resource
				icon={UserIcon}
				name='residers'
				list={ResidersList}
				edit={ResidersEdit}
				create={ResidersCreate}
				options={{ label: 'Moradores' }}
				title='Moradores'
			/>
			<Resource
				icon={UserIcon}
				name='categories'
				list={ListGuesser}
				options={{ label: 'Categorias' }}
				title='Categorias'
			/>
		</Admin>
	);
}

export default App;
