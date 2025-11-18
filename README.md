# n8n-nodes-leadboxer

This is an n8n community node that lets you use LeadBoxer API in your n8n workflows.

LeadBoxer is a Lead Data Platform for Lead identification, qualification, and management.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

1. Go to **Settings > Community Nodes**.
2. Select **Install**.
3. Enter `n8n-nodes-leadboxer` in **Enter npm package name**.
4. Agree to the [risks](https://docs.n8n.io/integrations/community-nodes/risks/) of using community nodes.
5. Select **Install**.

After installing the node, you can use it like any other node. n8n displays the node in search results in the **Nodes** panel.

## Operations

This node supports the following operations:

###Domain Lookup

- Get enriched company information for any domain

- Returns company details, location, employee range, industry classification, technologies in use, and related firmographic data

###IP Address Lookup

- Get company identification and detailed context for an IP address

- Returns the identified company domain (when available), plus country, city, ISP, timezone, coordinates, and usage type

## Credentials

To use this node, you need a LeadBoxer API key.You can obtain one in the LeadBoxer Developer Portal (link to Leadboxerdevelopers.leadboxer.com/docs/n8n)

Enter your API key in the n8n credentials:
- **Credential Type**: LeadBoxer API
- **API Key**: Your LeadBoxer API key
> [!CAUTION]  
> The API key should be kept secure and never shared publicly

## Compatibility

- Minimum n8n version: 1.0.0+
- Tested with n8n version: 1.0.0+

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [LeadBoxer Website](https://www.leadboxer.com/)
* [Leadboxer Docs(https://developers.leadboxer.com/inactive)]