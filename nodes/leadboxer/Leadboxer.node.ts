import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Leadboxer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'LeadBoxer',
		name: 'leadboxer',
		icon: 'file:leadboxer.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Enrich domains and identify companies behind IPs in one step',
		defaults: {
			name: 'LeadBoxer',
		},
		inputs: ['main'],
		outputs: ['main'],
		usableAsTool: true,
		codex: {
			alias: ['lead generation', 'ip lookup', 'domain lookup', 'company data', 'geolocation', 'lead enrichment'],
			categories: ['Marketing & Sales'],
			subcategories: {
				'Marketing & Sales': ['Lead Generation'],
			},
			resources: {
				primaryDocumentation: [
					{
						url: 'https://developers.leadboxer.com/docs/n8n/',
					},
				],
			},
		},
		credentials: [
			{
				name: 'leadBoxerApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://data.leadboxer.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Domain',
						value: 'domain',
						description: 'Enrich company data from domain names',
					},
					{
						name: 'IP Address',
						value: 'ip',
						description: 'Identify companies behind IP addresses',
					},
				],
				default: 'domain',
				description: 'Choose what to lookup: domain or IP address',
			},
			// Domain Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['domain'],
					},
				},
				options: [
					{
						name: 'Lookup',
						value: 'lookup',
						action: 'Enrich domain data',
						description: 'Get enriched company information for any domain',
						routing: {
							request: {
								method: 'GET',
								url: '/domain-lookup',
							},
							output: {
								postReceive: [
									{
										type: 'rootProperty',
										properties: {
											property: 'output',
										},
									},
								],
							},
						},
					},
				],
				default: 'lookup',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['lookup'],
					},
				},
				default: '',
				placeholder: '={{ $json.domain }}',
				description: 'The domain to lookup (e.g., leadboxer.com). Can use expressions to get from previous nodes.',
				routing: {
					request: {
						qs: {
							domain: '={{ $value }}',
						},
					},
				},
			},
			// IP Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['ip'],
					},
				},
				options: [
					{
						name: 'Lookup',
						value: 'lookup',
						action: 'Identify company from IP',
						description: 'Get company identification and detailed context for an IP address',
						routing: {
							request: {
								method: 'GET',
								url: '/ip-lookup',
							},
						},
					},
				],
				default: 'lookup',
			},
			{
				displayName: 'IP Address',
				name: 'ip',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['ip'],
						operation: ['lookup'],
					},
				},
				default: '',
				placeholder: '={{ $json.ip }}',
				description: 'The IP address to lookup (e.g., 103.138.232.38). Can use expressions to get from previous nodes.',
				routing: {
					request: {
						qs: {
							ip: '={{ $value }}',
						},
					},
				},
			},
		],
	};
}