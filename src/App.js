import { Admin, Resource } from 'react-admin';
import { ClientsCreate, ClientsEdit, ClientsList } from './resources/clients';
import {
	ProposalsList,
	ProposalsEdit,
	ProposalsCreate,
} from './resources/proposals';
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
			title='Sustento Energia Solar'>
			<Resource
				icon={LibraryBooksIcon}
				name='proposals'
				list={ProposalsList}
				edit={ProposalsEdit}
				create={ProposalsCreate}
				options={{ label: 'Propostas' }}
				title='Propostas'
			/>
			<Resource
				icon={UserIcon}
				name='clients'
				list={ClientsList}
				edit={ClientsEdit}
				create={ClientsCreate}
				options={{ label: 'Clientes' }}
			/>
		</Admin>
	);
}

export default App;
