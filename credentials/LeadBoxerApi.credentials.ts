import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LeadBoxerApi implements ICredentialType {
	name = 'leadBoxerApi';
	displayName = 'LeadBoxer API';
	documentationUrl = 'https://developers.leadboxer.com/inactive';
	icon = 'file:../nodes/leadboxer/leadboxer.svg' as const;
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://data.leadboxer.com/api',
			url: '/ip-lookup',
			method: 'GET',
			qs: {
				ip: '8.8.8.8',
			},
		},
	};
}